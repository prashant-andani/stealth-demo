import prisma from "./prisma";

// READ
//get unique note by id
export const getRecordById = async (id) => {
  const note = await prisma.record.findUnique({
    where: {
      id,
    },
  });
  return note;
};

// CREATE
export const createRecord = async (productName, quantity, totalPrice) => {
  const newRecord = await prisma.note.create({
    data: {
      productName,
      quantity,
      totalPrice,
      dateTime: new Date(),
    },
  });
  const record = await getRecordById(newRecord.id);

  return record;
};
