# MAX_WIDTH에 맞춰 크기 조정

SRC_DIR="public/resource"
DEST_DIR="public/resource_resized"
MAX_WIDTH=1200

command -v convert >/dev/null 2>&1 || { echo >&2 "❌ convert (ImageMagick) 미설치. brew install imagemagick"; exit 1; }

find "$SRC_DIR" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) | while read -r FILE; do
    REL_PATH="${FILE#$SRC_DIR/}"
    OUT_PATH="$DEST_DIR/${REL_PATH%.*}.${FILE##*.}"  # 같은 확장자 유지

    mkdir -p "$(dirname "$OUT_PATH")"

    echo "🔧 리사이징: $REL_PATH → $OUT_PATH"
    convert "$FILE" -resize "${MAX_WIDTH}"x "$OUT_PATH"
done
