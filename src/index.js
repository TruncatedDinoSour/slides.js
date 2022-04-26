"use strict";

/**
 * The slide.js configuraton
 * @type {object}
 */
var SLIDEJS_CFG = {
    err_style: "font-family: sans;",
    slide_idx: 0,
    current_slide: null,
};

/**
 * The slide.js slides
 * @type {object[]}
 */
var SLIDEJS_SLIDES = [];

/**
 * Raise error and show error in slide
 * @param {string} error - The error message
 */
function slides_error(error) {
    let text = `SLIDESJS ERROR: ${error}`;

    let err = document.createElement("h1");

    err.style = SLIDEJS_CFG["err_style"];
    err.innerText = text;

    (SLIDEJS_CFG["current_slide"]
        ? SLIDEJS_CFG["current_slide"]
        : document.body
    ).innerHTML = err.outerHTML;

    throw error;
}

/**
 * Check that there is no errors with SLIDEJS_CFG
 */
function slidejs_check() {
    if (!SLIDEJS_CFG["current_slide"])
        slides_error("init_slides() was never called to initialise slidejs");

    if (SLIDEJS_CFG["slide_idx"] >= SLIDEJS_SLIDES.length)
        SLIDEJS_CFG["slide_idx"] = 0;

    if (SLIDEJS_CFG["slide_idx"] < 0)
        SLIDEJS_CFG["slide_idx"] = SLIDEJS_SLIDES.length - 1;
}

/**
 * (Re)display current slide
 */
function display_slide() {
    slidejs_check();
    SLIDEJS_CFG["current_slide"].innerHTML =
        SLIDEJS_SLIDES[SLIDEJS_CFG["slide_idx"]].innerHTML;
}

/**
 * Display next slide
 */
function display_next_slide() {
    SLIDEJS_CFG["slide_idx"]++;
    display_slide();
}

/**
 * Display previous slide
 */
function display_prev_slide() {
    SLIDEJS_CFG["slide_idx"]--;
    display_slide();
}

/**
 * Initialise slides.js
 * @param {!string} domq - DOM query which is used to find the slides element
 */
function init_slides(domq) {
    let slides = document.querySelector(domq);

    if (!slides) slides_error(`No element found by query of '${domq}'`);

    SLIDEJS_CFG["current_slide"] = slides;

    SLIDEJS_SLIDES.push(...slides.children);
    slides.innerHTML = "";
}
