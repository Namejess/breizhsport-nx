"use strict";
const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        // function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const __generator = (this && this.__generator) || function (thisArg, body) {
    let _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getProducts = void 0;
const Products_1 = require("../models/Products");
// Récupérer tous les produits
const getProducts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    let products, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, 3]);
                return [4 /*yield*/, Products_1.default.find()];
            case 1:
                products = _a.sent();
                res.status(200).json(products);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(500).json({ message: 'Erreur lors de la récupération des produits', error: error_1 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getProducts = getProducts;
// Récupérer un produit par ID
const getProductById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    let product, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, 3]);
                return [4 /*yield*/, Products_1.default.findById(req.params.id)];
            case 1:
                product = _a.sent();
                if (!product)
                    return [2 /*return*/, res.status(404).json({ message: 'Produit non trouvé' })];
                res.status(200).json(product);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(500).json({ message: 'Erreur lors de la récupération du produit', error: error_2 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getProductById = getProductById;
// Créer un nouveau produit
const createProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    let _a, name_1, price, description, inStock, newProduct, savedProduct, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, 3]);
                // _a = req.body, name_1 = _a.name, price = _a.price, description = _a.description, inStock = _a.inStock;
                newProduct = new Products_1.default({ name: name_1, price: price, description: description, inStock: inStock });
                return [4 /*yield*/, newProduct.save()];
            case 1:
                savedProduct = _b.sent();
                res.status(201).json({ message: 'Produit créé avec succès', product: savedProduct });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _b.sent();
                res.status(500).json({ message: 'Erreur lors de la création du produit', error: error_3 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createProduct = createProduct;
// Mettre à jour un produit
const updateProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    let updatedProduct, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, 3]);
                return [4 /*yield*/, Products_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true })];
            case 1:
                updatedProduct = _a.sent();
                if (!updatedProduct)
                    return [2 /*return*/, res.status(404).json({ message: 'Produit non trouvé' })];
                res.status(200).json({ message: 'Produit mis à jour avec succès', product: updatedProduct });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                res.status(500).json({ message: 'Erreur lors de la mise à jour du produit', error: error_4 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateProduct = updateProduct;
// Supprimer un produit
const deleteProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    let deletedProduct, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, 3]);
                return [4 /*yield*/, Products_1.default.findByIdAndDelete(req.params.id)];
            case 1:
                deletedProduct = _a.sent();
                if (!deletedProduct)
                    return [2 /*return*/, res.status(404).json({ message: 'Produit non trouvé' })];
                res.status(200).json({ message: 'Produit supprimé avec succès' });
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                res.status(500).json({ message: 'Erreur lors de la suppression du produit', error: error_5 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteProduct = deleteProduct;
