import http from 'k6/http';
import { check} from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

// Definindo o endpoint
const url = 'https://jsonplaceholder.typicode.com/posts';

// Payload do corpo da requisição
const payload = JSON.stringify({
  title: 'test',
  body: 'test',
  userId: 1,
});

// Cabeçalhos da requisição
const params = {
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
};

export default function () {
  // Envia a requisição POST com o payload e cabeçalhos definidos
  let res = http.post(url, payload, params);

  // Verifica se o status da resposta é 201 (Criado)
  check(res, {
    'status é 201': (r) => r.status === 201,
  });
}

  export function handleSummary(data) {
    return {
        'reports/posts.html': htmlReport(data),
    };
}
