"""fetches a week's (7 days') worth of NYT Wordle answers and writes them to
pichordle/answers-week.json as a { "YYYY-MM-DD": "WORD" } map.
run weekly via .github/workflows/fetch-weekly-wordle-answer.yml.
"""
import json
import datetime
from urllib.request import Request, urlopen

answers = {}
today = datetime.datetime.now().date()

for i in range(7):
    d = today + datetime.timedelta(days=i)
    date_str = d.isoformat()
    url = f"https://www.nytimes.com/svc/wordle/v2/{date_str}.json"
    try:
        req = Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode())
            answers[date_str] = data["solution"].upper()
    except Exception as e:
        # answers havent been published or there's been a mistake w the fetch.
        # doesn't terminate and instead keeps the fetched dates only.
        print(f"Skipping {date_str}: {e}")

with open("pichordle/week-answers.json", "w") as f:
    json.dump(answers, f, indent=2, sort_keys=True)

print(json.dumps(answers, indent=2, sort_keys=True))
