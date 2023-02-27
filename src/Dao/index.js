import { config } from "../config/index.js";
import {
  ProductMongo,
  ProductFilesystem,
  ProductMemory,
} from "./ProductDao/index.js";
import { CartMongo, CartFilesystem, CartMemory } from "./CartDao/index.js";

const getDaosBySelectedDB = ({ selectedDB }) => {
  switch (selectedDB) {
    case config.persistences.mongo: {
      const ProductDao = new ProductMongo();
      const CartDao = new CartMongo();
      return { ProductDao, CartDao };
    }
    case config.persistences.filesystem: {
      const ProductDao = new ProductFilesystem();
      const CartDao = new CartFilesystem();
      return { ProductDao, CartDao };
    }
    case config.persistences.memory: {
      const ProductDao = new ProductMemory();
      const CartDao = new CartMemory();
      return { ProductDao, CartDao };
    }
    default: {
      const ProductDao = new ProductMongo();
      const CartDao = new CartMongo();

      return { ProductDao, CartDao };
    }
  }
};

const { ProductDao, CartDao } = getDaosBySelectedDB({
  selectedDB: config.server.SELECTED_DB,
});

export { ProductDao, CartDao };
