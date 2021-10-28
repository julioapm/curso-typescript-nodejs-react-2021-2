import { Conversor } from "../negocio/conversor";
import { getConversao } from "./conversor.controller";
import { ConversaoDTO } from "./conversao.dto";
import supertest from "supertest";
import app from "../app";

describe("conversao.controller", () => {
  describe("getConversao() unitário", () => {
    const mockConversor = jest
      .spyOn(Conversor, "converter")
      .mockResolvedValue(5.75);
    const resultadoEsperado: ConversaoDTO = {
      moeda_origem: "USD",
      moeda_destino: "BRL",
      valor_conversao: 5.75,
    };
    test("deve converter 1 USD para BRL com valor de 5.75", async () => {
      const resultado = await supertest(app)
        .get("/api/conversor?moeda=USD&quantidade=1");
      expect(resultado.status).toBe(200);
      expect(resultado.body).toEqual(resultadoEsperado);
      expect(mockConversor).toHaveBeenCalledWith("USD", 1);
    });
  });
});
