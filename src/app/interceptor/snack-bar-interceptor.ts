import {Injectable} from "@angular/core";
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {tap} from "rxjs";

import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable()
export class SnackBarInterceptor implements HttpInterceptor {

    constructor(private _snackBar: MatSnackBar) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        return next.handle(req).pipe(tap({
            error: (error) => {
                if (error.status === 400) {

                    console.log(error);

                    this._snackBar.open(error.error.message, 'close', {
                        duration: 3 * 1000
                    });


                } else if (error.status === 404) {
                    alert('Page Not Found!')
                }
            }
        }));
    }
}
