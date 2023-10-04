import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const modestoBee = await prisma.business.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      email: "modbee@test.com",
      phoneNumber: "123-456-789",
      password: "Pa$$w0rd",
      name: "Modesto Bee",
      website: "https://www.modbee.com/",
    },
  });

  const oakdaleLeader = await prisma.business.upsert({
    where: {
      id: 2,
    },
    update: {},
    create: {
      email: "oakdaleleader@test.com",
      phoneNumber: "123-456-789",
      password: "Pa$$w0rd",
      name: "Oakdale Leader",
      website: "https://www.oakdaleleader.com/",
    },
  });

  const riverbankNews = await prisma.business.upsert({
    where: {
      id: 3,
    },
    update: {},
    create: {
      email: "riverbanknews@test.com",
      phoneNumber: "123-456-789",
      password: "Pa$$w0rd",
      name: "Riverbank News",
      website: "https://www.theriverbanknews.com/news",
    },
  });

  const tracyPress = await prisma.business.upsert({
    where: {
      id: 4,
    },
    update: {},
    create: {
      email: "tracypress@test.com",
      phoneNumber: "123-456-789",
      password: "Pa$$w0rd",
      name: "Tracy Press",
      website: "https://www.ttownmedia.com/tracy_press/news",
    },
  });

  const riponNews = await prisma.business.upsert({
    where: {
      id: 5,
    },
    update: {},
    create: {
      email: "myripon@test.com",
      phoneNumber: "123-456-789",
      password: "Pa$$w0rd",
      name: "My Ripon",
      website: "https://www.myripon.com/blog/categories/news",
    },
  });

  const turlockJournal = await prisma.business.upsert({
    where: {
      id: 6,
    },
    update: {},
    create: {
      email: "turlockjournal@test.com",
      phoneNumber: "123-456-789",
      password: "Pa$$w0rd",
      name: "Turlock Journal",
      website: "https://www.turlockjournal.com",
    },
  });

  const tyler = await prisma.user.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      email: "tyler@test.com",
      password: "Pa$$w0rd",
      businessId: 1,
    },
  });
  const jorge = await prisma.user.upsert({
    where: {
      id: 2,
    },
    update: {},
    create: {
      email: "jorge@test.com",
      password: "Pa$$w0rd",
      businessId: 2,
    },
  });
  const daniel = await prisma.user.upsert({
    where: {
      id: 3,
    },
    update: {},
    create: {
      email: "daniel@test.com",
      password: "Pa$$w0rd",
      businessId: 3,
    },
  });
  const jesus = await prisma.user.upsert({
    where: {
      id: 4,
    },
    update: {},
    create: {
      email: "jesus@test.com",
      password: "Pa$$w0rd",
      businessId: 4,
    },
  });
  const ray = await prisma.user.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      email: "ray@test.com",
      password: "Pa$$w0rd",
      businessId: 5,
    },
  });

  const articleOne = await prisma.article.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      heading: "Article Heading",
      subheading: "Article, Sub, Heading",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Tyler",
      date: new Date(),
      category: "News",
      subcategory: "Breaking News",
      image: "test.com",
      buisnessId: 1,
    },
  });

  const articleTwo = await prisma.article.upsert({
    where: {
      id: 3,
    },
    update: {},
    create: {
      heading: "Article Heading Two",
      subheading: "Article, Sub, Heading",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Jorge",
      date: new Date(),
      category: "News",
      subcategory: "Breaking News",
      image: "test.com",
      buisnessId: 2,
    },
  });

  const articleThree = await prisma.article.upsert({
    where: {
      id: 3,
    },
    update: {},
    create: {
      heading: "Article Heading Three",
      subheading: "Article, Sub, Heading",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Daniel",
      date: new Date(),
      category: "Sports",
      subcategory: "High School Sports",
      image: "test.com",
      buisnessId: 3,
    },
  });

  const articleFour = await prisma.article.upsert({
    where: {
      id: 4,
    },
    update: {},
    create: {
      heading: "Article Heading Four",
      subheading: "Article, Sub, Heading",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Jesus",
      date: new Date(),
      category: "Sports",
      subcategory: "Local Sports",
      image: "test.com",
      buisnessId: 4,
    },
  });

  const articleFive = await prisma.article.upsert({
    where: {
      id: 5,
    },
    update: {},
    create: {
      heading: "Article Heading Five",
      subheading: "Article, Sub, Heading",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Ray",
      date: new Date(),
      category: "News",
      subcategory: "Local News",
      image: "test.com",
      buisnessId: 5,
    },
  });

  const articleSix = await prisma.article.upsert({
    where: {
      id: 6,
    },
    update: {},
    create: {
      heading: "Article Heading Six",
      subheading: "Article, Sub, Heading",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Tyler",
      date: new Date(),
      category: "News",
      subcategory: "Breaking News",
      image: "test.com",
      buisnessId: 1,
    },
  });

  const articleSeven = await prisma.article.upsert({
    where: {
      id: 7,
    },
    update: {},
    create: {
      heading: "Article Heading Seven",
      subheading: "Article, Sub, Heading",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Jorge",
      date: new Date(),
      category: "News",
      subcategory: "Breaking News",
      image: "test.com",
      buisnessId: 2,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
