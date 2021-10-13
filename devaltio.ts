// @ts-ignore  
import {proxy as valtioProxy, useSnapshot as valtioUseSnapshot} from 'valtio';

declare global {
    interface Window {
        __deValtio: any;
    }
}

const sendToDeValtio = window.__deValtio?.postMessage || function() {};

export const proxy = (...params: any[]) => {
    const newValtioProxy = valtioProxy(...params);
    sendToDeValtio('newProxy', JSON.stringify(newValtioProxy));
    return newValtioProxy;
};

export const useSnapshot = (...params: any[]) => {
    const newValtioSnapshot = valtioUseSnapshot(...params);
    sendToDeValtio('newSnapshot', JSON.stringify(newValtioSnapshot));
    return newValtioSnapshot;
};