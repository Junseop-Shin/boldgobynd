# 실행 권한 부여: chmod +x resize_and_convert.sh
# 변환 전: public/resources/images/foo/bar.jpg
# 변환 후: public/resources_webp/images/foo/bar.webp

SRC_DIR="public/resources"
DEST_DIR="public/resources_webp"

find "$SRC_DIR" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) | while read -r FILE; do
    # 상대 경로 구하기
    REL_PATH="${FILE#$SRC_DIR/}"
    # 출력 경로 만들기 (확장자 webp로 바꾸기)
    OUT_PATH="$DEST_DIR/${REL_PATH%.*}.webp"

    # 출력 디렉토리가 없으면 생성
    mkdir -p "$(dirname "$OUT_PATH")"

    # WebP로 변환
    cwebp -q 80 "$FILE" -o "$OUT_PATH"
done
