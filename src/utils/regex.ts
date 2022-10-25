export const urlRegex = new RegExp(
  "^(https?:\\/\\/)?" + // validate protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
    "(\\#[-a-z\\d_]*)?$",
  "i"
); // validate fragment locator

export const isValidUrl = (urlString: string) => {
  return urlRegex.test(urlString);
};

export const phoneNumberRegex = new RegExp(/^(\+)?(?:[0-9] ?){6,14}[0-9]$/);

export const isValidPhoneNumber = (phoneNumber: string) => {
  return phoneNumberRegex.test(phoneNumber);
};
