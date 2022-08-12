/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 50:
/***/ (() => {

const elementsEl = document.querySelectorAll('.element-animation');

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.remove('element-animation');
      }
    });
  }
  const options = {
    threshold: [0.25] };
  const observer = new IntersectionObserver(onEntry, options);

  for (let elm of elementsEl) {
    observer.observe(elm);
  }

const computedSliderQuantity = () => {
    if (window.matchMedia("(max-width: 615px)").matches) {
        return 1
      }
    if (window.matchMedia("(max-width: 885px)").matches) {
        return 1.8
      }
    return 2.8
  }

  let swiper = new Swiper(".mySwiper", {
    slidesPerView: computedSliderQuantity(),
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },
    navigation: {
        nextEl: ".our-goods__control-el_right",
        prevEl: ".our-goods__control-el_left",
      }
  });

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _js_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _js_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_api_js__WEBPACK_IMPORTED_MODULE_0__);




const headerMenuEl = document.querySelector('.header__control-el_menu')
const headerNavListEl = document.querySelector('.header__nav')
const headerLoupEl = document.querySelector('.header__control-el_loup')
const headerNavLinksEl = Array.from(headerNavListEl.querySelectorAll('.header__nav-el'))
const messageEl = document.querySelector('.our-goods__copied-message')
const searchBarEl = document.querySelector('.search-bar')
const searchBarCloseEl = document.querySelector('.search-bar__button_close')
const searchEl = document.querySelector('.search-bar__field')
const goodsListEl = Array.from(document.querySelectorAll('.search-bar__table-row'))
const cardButtonsEl = Array.from(document.querySelectorAll('.our-goods__card-fav'))
const sharebuttonsEl = Array.from(document.querySelectorAll('.our-goods__card-share'))
const furnitureSliderEl = document.querySelector('.furniture__right-slider')
const furnitureCategoryListEl = document.querySelector('.furniture__category-list')
const furnitureCategoryImagesEl = Array.from(document.querySelectorAll('.furniture__image-img'))
const furnitureCategoryEl = Array.from(document.querySelectorAll('.furniture__category'))


const toggleDropDownMenu = () => {
  headerMenuEl.classList.toggle('header__control-el_menu_active')
  headerNavListEl.classList.toggle('header__nav_hidden')
}

const hideDropDownMenu = () => {
  if(!headerNavListEl.classList.contains('header__nav_hidden')) {
    headerNavListEl.classList.add('header__nav_hidden')
    headerMenuEl.classList.remove('header__control-el_menu_active')
  }
}

headerMenuEl.addEventListener('click', toggleDropDownMenu)

headerNavLinksEl.forEach((el) => el.firstChild.addEventListener('click', hideDropDownMenu))

cardButtonsEl.forEach((el) => {
    el.addEventListener('click', ()=> {
        el.classList.toggle('our-goods__card-fav_active')
    })
})


const showCopiedMessage = (el) => {
  messageEl.classList.add('our-goods__copied-message_active')
    setTimeout(() => {
        messageEl.classList.remove('our-goods__copied-message_active')
    }, 2000);
}

sharebuttonsEl.forEach((el) => {
    el.addEventListener('click', showCopiedMessage)
})

const furnitureCategoryNullificate = () => {
    furnitureCategoryEl.forEach((el) => {
        if (el.classList.length > 1) {
            el.classList.remove('furniture__category_selected')
        }
    })
    const listClass = furnitureCategoryListEl.classList[1]
    furnitureCategoryListEl.classList.remove(listClass)
}

const furnitureCategorySetImage = (i = 0) => {
  furnitureCategoryImagesEl.forEach((img) => {
    img.style.opacity = 0;
  })
  furnitureCategoryImagesEl[i].style.opacity = 1;
}


const furnitureCategorySet = (i) => {
  const toDelete = furnitureSliderEl.classList[1]
  furnitureSliderEl.classList.remove(toDelete)
  furnitureSliderEl.classList.add(`furniture__right-slider_pos-${i}`)
}

furnitureCategoryEl.forEach((el, i) => {
    el.addEventListener('click', () => {
        furnitureCategoryNullificate()
        furnitureCategorySetImage(i)
        furnitureCategorySet(i)
        el.classList.add('furniture__category_selected')
        furnitureCategoryListEl.classList.add(`furniture__category-list_sel-${i + 1}`)
    })
})


  const showInputResults = () => {
    goodsListEl.forEach(el => el.style.display = 'none')
    let result = goodsListEl.filter((el) => el.children[1].textContent.toLowerCase().includes(searchEl.value.toLowerCase()))
    result.forEach((el) => el.style.display = 'table-row')
  }

  const closeSearchBar = () => {
    searchEl.disabled = true;
    document.body.style.overflow = 'auto'
    searchEl.value = '';
    showInputResults();
    searchBarEl.classList.remove('search-bar_visible')
  }

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
      closeSearchBar()
    }
  })

  headerLoupEl.addEventListener('click', () => {
    searchBarEl.classList.add('search-bar_visible')
    document.body.style.overflow = 'hidden'
    searchEl.disabled = false;
    searchEl.focus()
  })
  
  searchBarCloseEl.addEventListener('click', closeSearchBar)

  searchEl.addEventListener('input', showInputResults)
})();

/******/ })()
;