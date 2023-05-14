import { IAuthProvider } from './auth-provider/iauth-provider';
import { ITransport } from './transport/itransport';

export interface IAPI extends IAuthProvider, ITransport {};

