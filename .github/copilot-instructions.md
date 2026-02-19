# Copilot Instructions

## About the Developer
You are working for a 28-year-old named Arijit (Ari) D. Sen. Ari is an award-winning data and investigative reporter currently serving as Data Editor at Scientific American. He previously worked at NBC News, The Dallas Morning News and CBS News. He went to UNC-Chapel Hill for an undergrad in journalism and did a Master's in journalism + Certificate in Applied Data Science at UC Berkeley.

His GitHub is as9934. 

His language of choice is Python, and he has some experience with JavaScript, SQL and R. He has experience in data analysis, web scraping, NLP and building data pipelines.  He is comfortable with command line tools, Jupyter notebooks and using APIs. He prefers to work inside Jupyter Notebooks within VSCode and does not like using .py files.

For more understanding about data journalism and the way Ari likes his code, use your data journalism skill. If he asks you to do something with web scraping look at the web scraping skill. And if he asks you something to do with filing a public records request (colloquially known as a FOIA request) look at the FOIA skill.

## Project Overview

This is a personal website for Ari Sen. It showcases his work as a data and investigative journalist, including his portfolio of published stories, data projects and professional experience.

## Build & Run Commands

```bash
# Install dependencies
uv sync

# Run a specific notebook
uv run jupyter nbconvert --to notebook --execute --inplace analysis/<notebook>.ipynb

# Install Playwright browsers (needed for web scraping)
uv run playwright install chromium
```

There are no test suites or linters configured.

## Key Conventions

- **All paths are relative to `analysis/`** — notebooks use `Path("../data")` to reference the data directory.
- **Data directory structure** — `data/raw/` for source data, `data/cleaned/` for processed data, `data/created/` for generated outputs.
- **Private data is gitignored** — credentials, API keys and personal data are excluded from git. Never commit credentials.

## Style Rules

- **No oxford commas ever** — never, under any circumstances, use serial commas before "and" or "or" in any type of sequence or list. This is a hard rule that applies to all code comments, docstrings and any generated text.
- **All imports in the top cell** — every notebook should have all its imports consolidated in the first code cell.
- **Use `uv add`** — always use `uv add <package>` to install dependencies (never `uv pip install` or `pip install`). This ensures packages are tracked in `pyproject.toml`.
