import { Observable } from '../../Observable';
import { subscribeOn } from '../../operator/subscribeOn';
Observable.prototype.subscribeOn = subscribeOn;
