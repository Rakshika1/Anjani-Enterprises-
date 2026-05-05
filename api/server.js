import server from '../dist/server/server.js';

export default async function handler(request, response) {
  try {
    // If Vercel provides a Web Request (1 argument):
    if (request instanceof Request || !response) {
      return await server.fetch(request);
    }
    
    // If Vercel provides Node.js req/res (2 arguments):
    const protocol = request.headers['x-forwarded-proto'] || 'https';
    const host = request.headers['x-forwarded-host'] || request.headers.host;
    const url = new URL(request.url, `${protocol}://${host}`);
    
    const init = {
      method: request.method,
      headers: request.headers,
    };
    
    if (request.method !== 'GET' && request.method !== 'HEAD' && request.body) {
      init.body = typeof request.body === 'string' ? request.body : JSON.stringify(request.body);
    }
    
    const webRequest = new Request(url, init);
    const webResponse = await server.fetch(webRequest);
    
    response.status(webResponse.status);
    webResponse.headers.forEach((value, key) => {
      response.setHeader(key, value);
    });
    
    if (webResponse.body) {
      const arrayBuffer = await webResponse.arrayBuffer();
      response.send(Buffer.from(arrayBuffer));
    } else {
      response.end();
    }
  } catch (error) {
    console.error("Vercel Serverless Function Error:", error);
    if (response) {
      response.status(500).send("Internal Server Error: " + error.message);
    } else {
      return new Response("Internal Server Error: " + error.message, { status: 500 });
    }
  }
}
