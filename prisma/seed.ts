import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.recipe.upsert({
    where: { title: 'Spaghetti Bolognese' },
    update: {},
    create: {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian dish',
      ingredients:
        'Spaghetti, minced beef, tomato sauce, onions, garlic, olive oil, salt, pepper',
      instructions:
        '1. Cook the spaghetti. 2. Fry the minced beef. 3. Add the tomato sauce to the beef. 4. Serve the spaghetti with the sauce.',
    },
  });

  await prisma.recipe.upsert({
    where: { title: 'Chicken Curry' },
    update: {},
    create: {
      title: 'Chicken Curry',
      description: 'A spicy Indian dish',
      ingredients:
        'Chicken, curry powder, onions, garlic, coconut milk, olive oil, salt, pepper',
      instructions:
        '1. Fry the chicken. 2. Add the curry powder to the chicken. 3. Add the coconut milk. 4. Serve the curry with rice.',
    },
  });
}

main()
  .then(async () => {
    console.log('Seeding completed.');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('Seeding error:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
