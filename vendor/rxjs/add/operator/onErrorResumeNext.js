import { Observable } from '../../Observable';
import { onErrorResumeNext } from '../../operator/onErrorResumeNext';
Observable.prototype.onErrorResumeNext = onErrorResumeNext;
