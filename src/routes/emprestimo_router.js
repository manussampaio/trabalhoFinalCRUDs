import { Router } from "express";
import {buscarEmprestimos, buscarEmprestimosPorID, adicionarEmprestimo, atualizarEmprestimo, deletarEmprestimo} from "../controllers/emprestimo_controller.js";
const emprestimosRouter = Router();

emprestimosRouter.get("/emprestimos", buscarEmprestimos);
emprestimosRouter.get("/emprestimos/:id", buscarEmprestimosPorID);
emprestimosRouter.post("/emprestimos", adicionarEmprestimo);
emprestimosRouter.put("/emprestimos/:id", atualizarEmprestimo);
emprestimosRouter.delete("/emprestimos/:id", deletarEmprestimo);

export {emprestimosRouter}