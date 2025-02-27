const toObject = (item: string) => ({ id: item, name: item });

export const fruits = ["Äpple", "Banan", "Apelsin", "Mango"].map(toObject);
export const animals = ["Apa", "Tiger", "Älg", "Mungo"].map(toObject);
