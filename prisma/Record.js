import prisma from "./prisma";

// READ
//get unique note by id
export const getAllRecords = async()=> {
  const record = await prisma.record.findMany();
  return record;
}
export const getRecordById = async (id) => {
  const record = await prisma.record.findUnique({
    where: {
      id,
    },
  });
  return record;
};

// CREATE
export const createRecord = async (productName, quantity, totalPrice) => {
  const newRecord = await prisma.record.create({
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
