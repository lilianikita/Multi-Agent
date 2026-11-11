"""Единая настройка модели для QA Agent и Evaluator.

Free-модели OpenCode упираются в общий дневной лимит
(HTTP 429, provider.free-limit). Когда лимит исчерпан, каждый
eval-кейс падает с ERROR, а судья Evaluator — с return code 1,
и прогон не даёт метрик.

Модель задаётся в одном месте и переопределяется переменной
окружения EVAL_AGENT_MODEL, чтобы не править код при смене
провайдера.
"""

import os


DEFAULT_MODEL = "llm-router-org/deepseek-v4-flash"


AGENT_MODEL = os.environ.get(
    "EVAL_AGENT_MODEL",
    DEFAULT_MODEL
)
