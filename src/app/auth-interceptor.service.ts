import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("request is on its way");
    const modifiedRequest = req.clone({
      params:null,
      url:"some new url",

    })
    return next.handle(req);

  }
}
