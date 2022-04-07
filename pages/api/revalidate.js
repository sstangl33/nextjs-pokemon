export default async function handler(req, res) {
  for (const url of req.body) {
    await res.unstable_revalidation(url);
  }
  res.status(200).json({ revalidate: true });
}
