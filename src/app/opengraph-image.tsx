export const alt = "SOPT 데모데이 대표 이미지";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new Response(null, {
    status: 302,
    headers: {
      Location:
        "https://github.com/user-attachments/assets/7c7453ed-f5b6-4e40-b97d-536070f5346a",
    },
  });
}
