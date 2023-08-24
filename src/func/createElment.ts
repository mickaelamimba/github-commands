type Props={
    tag:string,
    props:{[key:string]:string},
    func : (e: Event) => void,
    children:HTMLElement
}

export const createElement=({tag,props, func, children}:Props)=>{
    const element=document.createElement(tag);
    Object.keys(props).forEach((key)=>{
        element.setAttribute(key,props[key]);
    });
    if(func){
        element.addEventListener('click',func);
    }
    element.appendChild(children);
    return element;

}