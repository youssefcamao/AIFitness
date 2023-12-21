FROM python:3.12.1-slim

WORKDIR /backend

RUN apt-get update \
    && apt-get install -y --no-install-recommends gcc libc-dev \
    && rm -rf /var/lib/apt/lists/*
COPY requirements.txt ./

RUN pip install -r requirements.txt
COPY . .

EXPOSE 8080

CMD ["sh", "-c", "cd .. && uvicorn backend.main:app --host 0.0.0.0 --port 8080"]