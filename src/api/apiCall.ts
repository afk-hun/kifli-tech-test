// import { setupServer } from "msw/node";
// import { http, HttpResponse } from "msw";

// const server = setupServer(
//   http.post("/api/1.0/subscription", () => {
//     return HttpResponse.json({ status: 200, data: "success" });
//   })
// );

// server.listen();

export function postSubscription(email: string) {
  //   fetch("/api/1.0/subscription", {
  //     method: "POST",
  //     body: JSON.stringify({ email: email }),
  //   });

  return new Promise((res, rej) => {
    if (email === "asd@mail.com") {
      res({ data: "subscription success" });
    } else {
      rej({ data: "already subscribed e-mail" });
    }
  });
}
