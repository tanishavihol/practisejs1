// Example-1
class Products {
    getCost() {
      let costs = "15,25";
      const [first, second] = costs.split(",");
      return parseInt(first);
    }}
  let products = new Products();
  function displayCost() {
    return new Promise((resolve, reject) => {
      let firstCost = products.getCost();
      console.log(firstCost);
      if(firstCost) {
         resolve("success"); 
      } else { reject("error"); }
    });
  }
  displayCost()
    .then((val) => { console.log("complete", val); })
    .catch((err) => { console.error("error", err); });
  
  
  
  // Example-2
  class Item {
    getPrice() {
      let prices = "30,40";
      const [first, second] = prices.split(",");
      return parseInt(first);
    }}
  let item = new Item();
  function showPrice() {
    return new Promise((resolve, reject) => {
      let firstPrice = item.getPrice();
      console.log(firstPrice);
      if (firstPrice) {
        resolve("success");
      } else { reject("error"); }
    });
  }
  showPrice()
    .then((val) => { console.log("complete", val); })
    .catch((err) => { console.error("error", err); });
  
  
  
  // Example-3
  class Service {
    getRate() {
      let rates = "50,60";
      const [first, second] = rates.split(",");
      return parseInt(first);
    }
  }
  
  let service = new Service();
  
  function displayRate() {
    return new Promise((resolve, reject) => {
      let firstRate = service.getRate();
      console.log(firstRate);
      if (firstRate) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  
  displayRate().then((val) => {
    console.log("complete", val);
  }).catch((err) => {
    console.error("error", err);
  });
  
  
  
  // Example-4
  class Goodss {
    getCost() {
      let costs = "70,80";
      const [first, second] = costs.split(",");
      return parseInt(first);
    }
  }
  
  let goodss = new Goodss();
  
  function showCost() {
    return new Promise((resolve, reject) => {
      let firstCost = goodss.getCost();
      console.log(firstCost);
      if (firstCost) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  
  showCost().then((val) => {
    console.log("complete", val);
  }).catch((err) => {
    console.error("error", err);
  });
  
  
  
  // Example-5
  class Merchandise {
    getValue() {
      let values = "90,100";
      const [first, second] = values.split(",");
      return parseInt(first);
    }
  }
  
  let merchandise = new Merchandise();
  
  function displayValue() {
    return new Promise((resolve, reject) => {
      let firstValue = merchandise.getValue();
      console.log(firstValue);
      if (firstValue) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  
  displayValue().then((val) => {
    console.log("complete", val);
  }).catch((err) => {
    console.error("error", err);
  });
  
  
  
  // Example-6
  class Commodities {
    getPrice() {
      let prices = "110,120";
      const [first, second] = prices.split(",");
      return parseInt(first);
    }
  }
  
  let commodities = new Commodities();
  
  function showPrice() {
    return new Promise((resolve, reject) => {
      let firstPrice = commodities.getPrice();
      console.log(firstPrice);
      if (firstPrice) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  
  showPrice().then((val) => {
    console.log("complete", val);
  }).catch((err) => {
    console.error("error", err);
  });
  
  
  
  
  // Example-7
  class Articles {
    getRate() {
      let rates = "130,140";
      const [first, second] = rates.split(",");
      return parseInt(first);
    }
  }
  
  let articles = new Articles();
  
  function displayRate() {
    return new Promise((resolve, reject) => {
      let firstRate = articles.getRate();
      console.log(firstRate);
      if (firstRate) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  
  displayRate().then((val) => {
    console.log("complete", val);
  }).catch((err) => {
    console.error("error", err);
  });
  
  
  
  
  // Example-8
  class Asset {
    getValue() {
      let values = "150,160";
      const [first, second] = values.split(",");
      return parseInt(first);
    }
  }
  
  let asset = new Asset();
  
  function showValue() {
    return new Promise((resolve, reject) => {
      let firstValue = asset.getValue();
      console.log(firstValue);
      if (firstValue) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  
  showValue().then((val) => {
    console.log("complete", val);
  }).catch((err) => {
    console.error("error", err);
  });
  
  
  
  
  // Example-9
  class Objects {
    getCost() {
      let costs = "170,180";
      const [first, second] = costs.split(",");
      return parseInt(first);
    }
  }
  
  let objects = new Objects();
  
  function displayCost() {
    return new Promise((resolve, reject) => {
      let firstCost = objects.getCost();
      console.log(firstCost);
      if (firstCost) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  
  displayCost().then((val) => {
    console.log("complete", val);
  }).catch((err) => {
    console.error("error", err);
  });
  
  
  
  
  // Example-10
  class Resources {
    getPrice() {
      let prices = "190,200";
      const [first, second] = prices.split(",");
      return parseInt(first);
    }
  }
  
  let resources = new Resources();
  
  function showPrice() {
    return new Promise((resolve, reject) => {
      let firstPrice = resources.getPrice();
      console.log(firstPrice);
      if (firstPrice) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  
  showPrice().then((val) => {
    console.log("complete", val);
  }).catch((err) => {
    console.error("error", err);
  });
  
  
  
  
  // Example-11
  class Supply {
    getRate() {
      let rates = "210,220";
      const [first, second] = rates.split(",");
      return parseInt(first);
    }
  }
  
  let supply = new Supply();
  
  function displayRate() {
    return new Promise((resolve, reject) => {
      let firstRate = supply.getRate();
      console.log(firstRate);
      if (firstRate) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  
  displayRate().then((val) => {
    console.log("complete", val);
  }).catch((err) => {
    console.error("error", err);
  });
  
  
  
  
  // Example-12
  class Productss {
    getValue() {
      let values = "230,240";
      const [first, second] = values.split(",");
      return parseInt(first);
    }
  }
  
  let productss = new Productss();
  
  function showValue() {
    return new Promise((resolve, reject) => {
      let firstValue = productss.getValue();
      console.log(firstValue);
      if (firstValue) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  
  showValue().then((val) => {
    console.log("complete", val);
  }).catch((err) => {
    console.error("error", err);
  });
  
  
  
  
  // Example-13
  class Inventories {
    getCost() {
      let costs = "250,260";
      const [first, second] = costs.split(",");
      return parseInt(first);
    }
  }
  
  let inventories = new Inventories();
  
  function displayCost() {
    return new Promise((resolve, reject) => {
      let firstCost = inventories.getCost();
      console.log(firstCost);
      if (firstCost) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  
  displayCost().then((val) => {
    console.log("complete", val);
  }).catch((err) => {
    console.error("error", err);
  });
  
  
  
  
  // Example-14
  class Stock {
    getPrice() {
      let prices = "270,280";
      const [first, second] = prices.split(",");
      return parseInt(first);
    }
  }
  
  let stock = new Stock();
  
  function showPrice() {
    return new Promise((resolve, reject) => {
      let firstPrice = stock.getPrice();
      console.log(firstPrice);
      if (firstPrice) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  
  showPrice().then((val) => {
    console.log("complete", val);
  }).catch((err) => {
    console.error("error", err);
  });
  
  
  
  
  // Example-15
  class Inventoriess {
    getRate() {
      let rates = "290,300";
      const [first, second] = rates.split(",");
      return parseInt(first);
    }
  }
  
  let inventoriess = new Inventoriess();
  
  function displayRate() {
    return new Promise((resolve, reject) => {
      let firstRate = inventoriess.getRate();
      console.log(firstRate);
      if (firstRate) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  
  displayRate().then((val) => {
    console.log("complete", val);
  }).catch((err) => {
    console.error("error", err);
  });
  
  
  
  
  // Example-16
  class Materials {
    getValue() {
      let values = "310,320";
      const [first, second] = values.split(",");
      return parseInt(first);
    }
  }
  
  let materials = new Materials();
  
  function showValue() {
    return new Promise((resolve, reject) => {
      let firstValue = materials.getValue();
      console.log(firstValue);
      if (firstValue) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  
  showValue().then((val) => {
    console.log("complete", val);
  }).catch((err) => {
    console.error("error", err);
  });
  
  
  
  
  // Example-17
  class Commoditiess {
    getCost() {
      let costs = "330,340";
      const [first, second] = costs.split(",");
      return parseInt(first);
    }
  }
  
  let commoditiess = new Commoditiess();
  
  function displayCost() {
    return new Promise((resolve, reject) => {
      let firstCost = commoditiess.getCost();
      console.log(firstCost);
      if (firstCost) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  
  displayCost().then((val) => {
    console.log("complete", val);
  }).catch((err) => {
    console.error("error", err);
  });
  
  
  
  
  // Example-18
  class Articless {
    getPrice() {
      let prices = "350,360";
      const [first, second] = prices.split(",");
      return parseInt(first);
    }
  }
  
  let articless = new Articless();
  
  function showPrice() {
    return new Promise((resolve, reject) => {
      let firstPrice = articless.getPrice();
      console.log(firstPrice);
      if (firstPrice) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  
  showPrice().then((val) => {
    console.log("complete", val);
  }).catch((err) => {
    console.error("error", err);
  });
  
  
  
  
  // Example-19
  class Sources {
    getRate() {
      let rates = "370,380";
      const [first, second] = rates.split(",");
      return parseInt(first);
    }
  }
  
  let sources = new Sources();
  
  function displayRate() {
    return new Promise((resolve, reject) => {
      let firstRate = sources.getRate();
      console.log(firstRate);
      if (firstRate) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  
  displayRate().then((val) => {
    console.log("complete", val);
  }).catch((err) => {
    console.error("error", err);
  });
  
  
  
  
  // Example-20
  class Guds {
    getValue() {
      let values = "390,400";
      const [first, second] = values.split(",");
      return parseInt(first);
    }
  }
  
  let guds = new Guds();
  
  function showValue() {
    return new Promise((resolve, reject) => {
      let firstValue = guds.getValue();
      console.log(firstValue);
      if (firstValue) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  
  showValue().then((val) => {
    console.log("complete", val);
  }).catch((err) => {
    console.error("error", err);
  });
  
  
  
  
  // Example-21
  class Obj {
    getCost() {
      let costs = "410,420";
      const [first, second] = costs.split(",");
      return parseInt(first);
    }
  }
  
  let obj = new Obj();
  
  function displayCost() {
    return new Promise((resolve, reject) => {
      let firstCost = obj.getCost();
      console.log(firstCost);
      if (firstCost) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  
  displayCost().then((val) => {
    console.log("complete", val);
  }).catch((err) => {
    console.error("error", err);
  });
  
  
  
  
  // Example-22
  class Saamaan {
    getPrice() {
      let prices = "430,440";
      const [first, second] = prices.split(",");
      return parseInt(first);
    }
  }
  
  let saamaan = new Saamaan();
  
  function showPrice() {
    return new Promise((resolve, reject) => {
      let firstPrice = saamaan.getPrice();
      console.log(firstPrice);
      if (firstPrice) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  
  showPrice().then((val) => {
    console.log("complete", val);
  }).catch((err) => {
    console.error("error", err);
  });
  
  
  
  
  // Example-23
  class Inventory {
    getRate() {
      let rates = "450,460";
      const [first, second] = rates.split(",");
      return parseInt(first);
    }
  }
  
  let inventory = new Inventory();
  
  function displayRate() {
    return new Promise((resolve, reject) => {
      let firstRate = inventory.getRate();
      console.log(firstRate);
      if (firstRate) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  
  displayRate().then((val) => {
    console.log("complete", val);
  }).catch((err) => {
    console.error("error", err);
  });
  
  
  
  
  // Example-24
  class Material {
    getValue() {
      let values = "470,480";
      const [first, second] = values.split(",");
      return parseInt(first);
    }
  }
  
  let material = new Material();
  
  function showValue() {
    return new Promise((resolve, reject) => {
      let firstValue = material.getValue();
      console.log(firstValue);
      if (firstValue) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  
  showValue().then((val) => {
    console.log("complete", val);
  }).catch((err) => {
    console.error("error", err);
  });
  
  
  
  
  // Example-25
  class Commodity {
    getCost() {
      let costs = "490,500";
      const [first, second] = costs.split(",");
      return parseInt(first);
    }
  }
  
  let commodity = new Commodity();
  
  function displayCost() {
    return new Promise((resolve, reject) => {
      let firstCost = commodity.getCost();
      console.log(firstCost);
      if (firstCost) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  
  displayCost().then((val) => {
    console.log("complete", val);
  }).catch((err) => {
    console.error("error", err);
  });
  
  
  
  
  // Example-26
  class Article {
    getPrice() {
      let prices = "510,520";
      const [first, second] = prices.split(",");
      return parseInt(first);
    }
  }
  
  let article = new Article();
  
  function showPrice() {
    return new Promise((resolve, reject) => {
      let firstPrice = article.getPrice();
      console.log(firstPrice);
      if (firstPrice) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  
  showPrice().then((val) => {
    console.log("complete", val);
  }).catch((err) => {
    console.error("error", err);
  });
  
  
  
  
  // Example-27
  class Resource {
    getRate() {
      let rates = "530,540";
      const [first, second] = rates.split(",");
      return parseInt(first);
    }
  }
  
  let resource = new Resource();
  
  function displayRate() {
    return new Promise((resolve, reject) => {
      let firstRate = resource.getRate();
      console.log(firstRate);
      if (firstRate) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  
  displayRate().then((val) => {
    console.log("complete", val);
  }).catch((err) => {
    console.error("error", err);
  });
  
  
  
  
  // Example-28
  class Goods {
    getValue() {
      let values = "550,560";
      const [first, second] = values.split(",");
      return parseInt(first);
    }
  }
  
  let goods = new Goods();
  
  function showValue() {
    return new Promise((resolve, reject) => {
      let firstValue = goods.getValue();
      console.log(firstValue);
      if (firstValue) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  
  showValue().then((val) => {
    console.log("complete", val);
  }).catch((err) => {
    console.error("error", err);
  });
  
  
  
  
  // Example-29
  class Vastu {
    getCost() {
      let costs = "570,580";
      const [first, second] = costs.split(",");
      return parseInt(first);
    }
  }
  
  let vastu = new Vastu();
  
  function displayCost() {
    return new Promise((resolve, reject) => {
      let firstCost = vastu.getCost();
      console.log(firstCost);
      if (firstCost) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  
  displayCost().then((val) => {
    console.log("complete", val);
  }).catch((err) => {
    console.error("error", err);
  });
  
  
  
  
  // Example-30
  class Product {
    getPrice() {
      let prices = "590,600";
      const [first, second] = prices.split(",");
      return parseInt(first);
    }
  }
  
  let product = new Product();
  
  function showPrice() {
    return new Promise((resolve, reject) => {
      let firstPrice = product.getPrice();
      console.log(firstPrice);
      if (firstPrice) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  
  showPrice().then((val) => {
    console.log("complete", val);
  }).catch((err) => {
    console.error("error", err);
  });