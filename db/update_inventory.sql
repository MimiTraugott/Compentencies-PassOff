UPDATE shelfie_product
SET name=$2,
    price=$3,
    img=$4
WHERE id=$1;

select * from shelfie_product