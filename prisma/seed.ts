import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const post1 = await prisma.pienssa.upsert({
    where: { name: 'Users' },
    update: {},
    create: {
    name: 'Juan',
    lastname: "Arcos",
    mail:"juanar22@gmail.com"
    },
  });
    const post2 = await prisma.pienssa.upsert({
        where: { name: 'Users' },
        update: {},
        create: {
        name: 'Pedro',
        lastname: "Delgado",
        mail:"pedelg@gmail.com"
        },
  });



  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });