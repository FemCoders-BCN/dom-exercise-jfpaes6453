import { describe, expect, it, beforeAll } from "vitest";
import { JSDOM } from "jsdom";
import { buttonAlert } from "../src/js/app";

describe("app test", () => {
  let dom;

  beforeAll(async () => {
    dom = await JSDOM.fromFile("./index.html", { runScripts: "dangerously" });
    global.document = dom.window.document;
  });

  it("should render css", async () => {
    let link = document.querySelector("link");
    expect(link.href).toMatch(/style.css$/);
  })

  it("should set the background color of the button shopping cart to red"), () => {
    cartButton = document.createElement('button');
    cartButton.classList.add('button');
    cartButton.appendChild('itemTag');
    redCar();
    expect(itemTag.style.backgroundColor).toBe("red");
  }
  it("should set the background color of the car tag to red"), () => {
    itemTag = document.createElement('h3');
    itemTag.classList.add('tag');
    redColor.appendChild('itemTag');
    redCar();
    expect(itemTag.style.backgroundColor).toBe("red");
  }
  it("should set the background image of the product image to red"), () => {
    imgCard = document.createElement('img');
    redColor.appendChild('imgCard');
    redCar();
    expect(imgCard.style.backgroundImage).toBe('url("../public/img/redcar.jpg")');
  }
  it("should set the background color of the button shopping cart to gray"), () => {
    cartButton = document.createElement('button');
    cartButton.classList.add('button');
    cartButton.appendChild('itemTag');
    grayCar();
    expect(itemTag.style.backgroundColor).toBe("gray");
  }
  it("should set the background color of the car tag to gray"), () => {
    itemTag = document.createElement('h3');
    itemTag.classList.add('tag');
    grayColor.appendChild('itemTag');
    grayCar();
    expect(itemTag.style.backgroundColor).toBe("gray");
  }
  it("should set the background image of the product image to gray"), () => {
    imgCard = document.createElement('img');
    grayColor.appendChild('imgCard');
    grayCar();
    expect(imgCard.style.backgroundImage).toBe('url("../public/img/graycar.jpg")');
  }
  it("should set the background color of the button shopping cart to black"), () => {
    cartButton = document.createElement('button');
    cartButton.classList.add('button');
    cartButton.appendChild('itemTag');
    blackCar();
    expect(itemTag.style.backgroundColor).toBe("black");
  }
  it("should set the background color of the car tag to black"), () => {
    itemTag = document.createElement('h3');
    itemTag.classList.add('tag');
    blackColor.appendChild('itemTag');
    blackCar();
    expect(itemTag.style.backgroundColor).toBe("black");
  }
  it("should set the background image of the product image to black"), () => {
    imgCard = document.createElement('img');
    blackColor.appendChild('imgCard');
    blackCar();
    expect(imgCard.style.backgroundImage).toBe('url("../public/img/black.jpg")');
  }
  it("should exist an alert text", () => {
    expect(document.getElementById("white-button").textContent).toBeDefined();
    expect(typeof buttonAlert).toBe("function");
  });
})
