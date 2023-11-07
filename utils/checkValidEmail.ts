export default function (email: string) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
