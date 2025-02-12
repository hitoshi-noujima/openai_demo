FROM denoland/deno:latest

WORKDIR /app

COPY . .

RUN deno cache main.ts

USER deno

EXPOSE 8000

CMD ["deno", "run", "--allow-net", "--allow-env", "main.ts"]


