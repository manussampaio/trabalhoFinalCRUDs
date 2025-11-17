import { Router } from "express";
import  {buscarAutores, buscarAutoresPorID, adicionarAutor, atualizarAutor, deletarAutor} from "../controllers/autores_controller.js";
const autoresRouter = Router();

autoresRouter.get("/autores", buscarAutores);
autoresRouter.get("/autores/:id", buscarAutoresPorID);
autoresRouter.post("/autores", adicionarAutor);
autoresRouter.put("/autores/:id", atualizarAutor);
autoresRouter.delete("/autores/:id", deletarAutor);

export {autoresRouter}