
type Button = 'imageBtn' | 'videoBtn' | 'noteBtn' | 'taskBtn';

let modalType:Button = 'imageBtn';

const clickAddBtn = (id: Button) => {
    const modal = document.getElementById('modal');
    const viewType = document.getElementById('viewType'); 
    modalType = id;

    viewType?.classList.remove('none');
    modal?.classList.remove('none');
}

/**
 * 팝업을 초기화 하고, 닫는다.
 */
const clickCloseBtn = () => {
    const modal = document.getElementById('modal');
    const viewType = document.getElementById('viewType');
    const viewTypeInput = viewType?.getElementsByTagName('input');  

    Array.prototype.forEach.call(viewTypeInput, (elem) => {
        elem.value = '';
    });

    viewType?.classList.add('none');
    modal?.classList.add('none');
}

const clickSaveBtn = () => {
    let html;
    const body = document.getElementById('body');

    const title = <HTMLInputElement>document.getElementById('title');
    const contents =<HTMLInputElement> document.getElementById('contents');

    switch(modalType) {
        case 'imageBtn' : html = imageContainer(title.value, contents.value);
        break;
        case 'videoBtn' : html = videoContainer(title.value, contents.value);
        break;
        case 'noteBtn' : html =  noteContainer(title.value, contents.value);
        break;
        case 'taskBtn' : html = todoContainer(title.value, contents.value);
        break;
        default:
        break;
    }

    body?.appendChild(html);
    clickCloseBtn();
}

const clickRemoveBtn = (e: Event) => {

}

const imageContainer = (title: string, contents: string): string => {
   
    const html = `<div class="contents-container">
                <div class="contents"><img src="${contents}"></div>
                <div class="title">${title}</div>
                <div class="close"><a onclick="clickRemoveBtn(e)">X</a></div>
            </div>`
    return html
}

const videoContainer = (title: string, contents: string) => {
    
    const html = `<div class="contents-container">
               <div class="contents">
                    <iframe width="100%" height="100%" src="${contents}" title="YouTube video player"
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                 </div>
                <div class="title">${title}</div>
                <div class="close"><a onclick="clickRemoveBtn(e)">X</a></div>
            </div>`
    return html
}

const noteContainer = (title: string, contents: string) => {
    
    const html = `<div class="contents-container">
                <div class="title">${title}</div>
                <div class="body">${contents}</div>
                <div class="close"><a onclick="clickRemoveBtn(e)">X</a></div>
            </div>`
    return html
}

const todoContainer = (title: string, contents: string) => {
    
    const html = `<div class="contents-container">
                <div class="title">${title}</div>
                <div class="body"><input type="checkbox"><label>${contents}</label></div>
                <div class="close"><a onclick="clickRemoveBtn(e)">X</a></div>
            </div>`
    return html
}