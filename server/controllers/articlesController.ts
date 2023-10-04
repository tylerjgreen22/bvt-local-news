import { Request, Response, Router, response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getArticles = async (req: Request, res: Response) => {
  try {
    const articles = await prisma.article.findMany();

    return res.status(200).json(articles);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
};

const getArticle = async (req: Request, res: Response) => {
  const id = +req.params.id;

  if (id) {
    try {
      const article = await prisma.article.findUnique({
        where: {
          id,
        },
      });

      return article ? res.status(200).json(article) : res.sendStatus(404);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(400);
};

export const router = Router();

router.get("/", getArticles);
router.get("/:id", getArticle);
