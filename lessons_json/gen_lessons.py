#!/usr/bin/env python3
"""Render lesson-content JSON files into standalone HTML lessons (PM theme)."""
import json, os, glob, html, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
CUR = json.load(open(os.path.join(HERE, "_curriculum.json")))
READINGS = {r["id"]: r for r in CUR["READINGS"]}

def tags(s):
    """Turn escaped &lt;b&gt; etc. back into real tags; leave other < > escaped."""
    for t in ("b","sub","sup","i","br"):
        s = s.replace(f"&lt;{t}&gt;", f"<{t}>").replace(f"&lt;/{t}&gt;", f"</{t}>")
    return s

def fml(s):
    s = html.unescape(s)                    # normalize entities
    s = html.escape(s)                      # then make safe for display
    return s.replace("\n", "<br>")

def callout(c):
    if not c or not isinstance(c, dict): return ""
    lbl = (c.get("label") or "").strip(); txt = (c.get("text") or "").strip()
    if not lbl or not txt: return ""
    cls = "callout info" if c.get("type") == "info" else "callout"
    return f'<div class="{cls}"><span class="lbl">{tags(html.escape(lbl))}</span>{tags(txt)}</div>'

CSS = """
  :root{--ink:#16202E;--paper:#ECEDE8;--raised:#F6F6F2;--line:#D6D8D0;--muted:#5B6675;
    --real:#2E5E8C;--real-bg:#E2ECF4;--inf:#BE842A;--inf-bg:#F3E7CE;--credit:#B0483B;--credit-bg:#F2E1DD;
    --mono:'IBM Plex Mono',monospace;--disp:'Space Grotesk',sans-serif;--body:'Pretendard',system-ui,sans-serif;
    --shadow:0 1px 2px rgba(22,32,46,.05),0 8px 24px rgba(22,32,46,.06);}
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:var(--body);background:var(--paper);color:var(--ink);line-height:1.75;-webkit-font-smoothing:antialiased;letter-spacing:-.01em}
  main{max-width:820px;margin:0 auto;padding:44px 20px 90px}
  .back{font-family:var(--mono);font-size:12.5px;color:var(--muted);display:inline-block;margin-bottom:14px}
  .back:hover{color:var(--real)}
  .eyebrow{display:flex;align-items:center;gap:9px;font-family:var(--mono);font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-bottom:8px}
  .eyebrow .dot{width:9px;height:9px;border-radius:50%;background:var(--real)}
  h1{font-family:var(--disp);font-weight:700;font-size:clamp(26px,5vw,38px);line-height:1.12;letter-spacing:-.02em;margin-bottom:8px}
  h2{font-size:clamp(19px,4vw,24px);font-weight:700;letter-spacing:-.02em;margin:34px 0 12px;padding-top:14px;border-top:1px solid var(--line)}
  p{margin-bottom:10px}
  .lead{font-size:16.5px;color:#26313F;margin:12px 0 6px}
  .muted{color:var(--muted)}
  a{color:var(--real)}
  .tbl-wrap{overflow-x:auto;margin:14px 0;border:1px solid var(--line);border-radius:12px}
  table{border-collapse:collapse;width:100%;font-size:14px;background:var(--raised)}
  th,td{text-align:left;padding:10px 13px;border-bottom:1px solid var(--line);vertical-align:top}
  th{background:#E4E5DF;font-weight:700;font-size:11px;letter-spacing:.03em;text-transform:uppercase;color:#26313F}
  tr:last-child td{border-bottom:none}
  td.term{font-family:var(--mono);font-size:13px;font-weight:500;white-space:nowrap}
  .fml{font-family:var(--mono);background:var(--ink);color:#EAF0F6;border-radius:10px;padding:14px 16px;margin:12px 0;font-size:13.5px;line-height:1.9;overflow-x:auto}
  .callout{border-radius:12px;padding:14px 16px;margin:14px 0;font-size:14.5px;background:var(--credit-bg);border:1px solid #E2BDB6}
  .callout .lbl{font-family:var(--mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;display:block;margin-bottom:3px;color:var(--credit);font-weight:700}
  .callout.info{background:var(--real-bg);border-color:#B9D2E6}.callout.info .lbl{color:var(--real)}
  .flow{font-family:var(--mono);font-size:13px;background:var(--real-bg);border-radius:10px;padding:14px 16px;line-height:1.9;color:#1d3f5c}
  .los-box{background:var(--real-bg);border:1px solid #B9D2E6;border-radius:12px;padding:14px 16px;margin:16px 0}
  .los-box .h{font-family:var(--mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--real);font-weight:700;margin-bottom:9px}
  .los-box ul{list-style:none}.los-box li{position:relative;padding-left:52px;margin-bottom:7px;font-size:14px}
  .los-box li .tag{position:absolute;left:0;top:2px;font-family:var(--mono);font-size:11px;font-weight:700;color:#fff;background:var(--real);border-radius:5px;padding:1px 6px}
  .q{background:var(--raised);border:1px solid var(--line);border-radius:12px;padding:16px 18px;margin:12px 0;box-shadow:var(--shadow)}
  .qn{display:flex;gap:9px;align-items:baseline;margin-bottom:10px}
  .qnum{font-family:var(--disp);font-weight:700;color:var(--credit);font-size:14px}
  .qtext{font-size:15px;font-weight:600}
  .opt{display:block;width:100%;text-align:left;cursor:pointer;font-family:var(--body);font-size:14px;border:1px solid var(--line);background:var(--paper);border-radius:9px;padding:10px 13px;margin-bottom:7px;transition:border-color .15s,background .15s;color:var(--ink)}
  .opt:hover:not(:disabled){border-color:var(--ink)}.opt:disabled{cursor:default}
  .opt.correct{background:var(--real-bg);border-color:var(--real);color:#1d3f5c;font-weight:600}
  .opt.wrong{background:var(--credit-bg);border-color:var(--credit);color:#8f382d;font-weight:600}
  .exp{display:none;margin-top:4px;font-size:14px;background:#E9EBE4;border-radius:9px;padding:11px 13px;color:#26313F;border-left:3px solid var(--ink)}
  .exp.show{display:block}
  .scorebar{font-family:var(--mono);font-size:13px;color:var(--muted);margin:6px 0 2px}
  .foot{margin-top:44px;padding-top:20px;border-top:1px solid var(--line);font-size:13px;color:var(--muted)}
"""

QUIZ_JS = """
const L=['A','B','C','D'];
const box=document.getElementById('quiz');const scoreEl=document.getElementById('score');
let answered=0,correct=0;
function upd(){scoreEl.textContent=correct+' / '+answered+' correct  ·  '+QUIZ.length+' questions';}
QUIZ.forEach((it,i)=>{const q=document.createElement('div');q.className='q';
  const h=document.createElement('div');h.className='qn';
  h.innerHTML='<span class="qnum">Q'+(i+1)+'</span><span class="qtext">'+it.q+'</span>';q.appendChild(h);
  it.o.forEach((opt,oi)=>{const b=document.createElement('button');b.className='opt';b.textContent=L[oi]+'. '+opt;
    b.addEventListener('click',()=>{if(q.dataset.done)return;q.dataset.done='1';answered++;if(oi===it.a)correct++;upd();
      q.querySelectorAll('.opt').forEach((bb,bi)=>{bb.disabled=true;if(bi===it.a)bb.classList.add('correct');else if(bi===oi)bb.classList.add('wrong');});
      q.querySelector('.exp').classList.add('show');});q.appendChild(b);});
  const e=document.createElement('div');e.className='exp';e.innerHTML='<b>Explanation · </b>'+it.e;q.appendChild(e);box.appendChild(q);});
upd();
"""

def render(d):
    rid = d["readingId"]; reading = READINGS[rid]
    los_text = {l["id"]: l["t"] for l in reading["los"]}
    # LOS box
    los_items = "".join(
        f'<li><span class="tag">LOS {i}</span>{tags(html.escape(los_text.get(i, i)))}</li>'
        for i in d.get("los", []))
    # key terms
    kt = "".join(
        f'<tr><td class="term">{tags(html.escape(k["term"]))}</td><td>{tags(k["def"])}</td></tr>'
        for k in d.get("keyterms", []))
    # sections
    secs = []
    for s in d.get("sections", []):
        parts = [f'<h2>{tags(html.escape(s["h"]))}</h2>']
        for p in s.get("body", []):
            parts.append(f'<p>{tags(p)}</p>')
        if s.get("formula"):
            parts.append(f'<div class="fml">{fml(s["formula"])}</div>')
        co = callout(s.get("callout"))
        if co: parts.append(co)
        secs.append("\n".join(parts))
    sections = "\n".join(secs)
    # flow
    flow = "<br>↓<br>\n".join(tags(html.escape(x)) for x in d.get("flow", []))
    # quiz -> JS (json.dumps keeps it valid)
    quiz = json.dumps(d.get("quiz", []), ensure_ascii=False)
    title = html.escape(d["title"])
    hook = tags(d.get("hook", ""))
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} · CFA L2</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>{CSS}</style>
</head>
<body>
<main>
  <a class="back" href="index-lessons.html#t={reading['topic']}">← Portfolio Management · lessons</a>
  <div class="eyebrow"><span class="dot"></span>Portfolio Management · {html.escape(reading['name'])}</div>
  <h1>{title}</h1>
  <p class="lead">{hook}</p>
  <div class="los-box"><div class="h">Learning objectives this lesson covers (LOS)</div><ul>{los_items}</ul></div>
  <h2>Key Terms</h2>
  <div class="tbl-wrap"><table><tr><th>Term</th><th>Meaning</th></tr>{kt}</table></div>
  {sections}
  <h2>Summary flow</h2>
  <div class="flow">{flow}</div>
  <h2>Quiz</h2>
  <div class="scorebar" id="score">0 / 0 correct</div>
  <div id="quiz"></div>
  <div class="foot">CFA® Level II · Portfolio Management · {html.escape(reading['name'])}.<br>
  All content is independently written in the CFA style and does not reproduce any exam or third-party materials. CFA® is a trademark of CFA Institute.</div>
</main>
<script>const QUIZ={quiz};{QUIZ_JS}</script>
</body>
</html>
"""

def main():
    entries = []
    for path in sorted(glob.glob(os.path.join(HERE, "*.json"))):
        if os.path.basename(path).startswith("_"): continue
        d = json.load(open(path))
        rid = d["readingId"]
        # validate quiz answer indices
        for qi, q in enumerate(d.get("quiz", [])):
            assert 0 <= q["a"] < len(q["o"]), f"{rid} quiz {qi} bad answer index"
        out = os.path.join(ROOT, f"{rid}.html")
        open(out, "w").write(render(d))
        entries.append((rid, d["title"], d.get("los", [])))
        print("wrote", os.path.basename(out), "| quiz", len(d.get("quiz", [])), "| secs", len(d.get("sections", [])))
    print("\n--- LESSONS entries ---")
    for rid, title, los in entries:
        los_js = ",".join(f'"{x}"' for x in los)
        print(f'  {{readingId:"{rid}", title:"{title}", en:"", file:"{rid}.html", los:[{los_js}]}},')

if __name__ == "__main__":
    main()
