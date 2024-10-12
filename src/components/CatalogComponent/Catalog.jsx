import style from './Catalog.module.css'
import { Card } from '../CardComponent/Card'

export function Catalog() {
    return (
        <>
            <div className={style.catalog_grid}>
                <Card img="https://tavago.ru/upload/resize_cache/iblock/9eb/400_400_1/9eb7847c9c9a925e05cfc118f8a708cf.jpg" name='Сепаратор воздуха' price="666" />
                <Card img="https://kitfort.ru/upload/resize_cache/webp/upload/iblock/edd/edddf7d15f3aefab22d9d52fec93a440.webp" name='Пылесос автомобильный' price="2 345" />
                <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV4DcbwtBtvd24T2XYGIFHRFPDROeSPsDeGg&s" name='Аптечка автомобильная' price="1 488" />
                <Card img="https://basket-04.wbbasket.ru/vol588/part58899/58899851/images/big/1.webp" name='Огнетушитель автомобильный' price="1 377" />
                <Card img="https://ir.ozone.ru/s3/multimedia-1-7/c1000/7099824715.jpg" name='Ароматизатор воздуха' price="844" />
                <Card img="https://www.mijia-shop.com/wp-content/uploads/2022/10/70mai-Dash-Cam-M500.jpg" name='Видеорегистратор Xiaomi' price="8 432" />
                <Card img="https://stickerboss.ru/upload/resize_cache/iblock/b85/400_400_140cd750bba9870f18aada2478b24840a/%D1%81%D0%B0%D0%BC%D1%83%D1%80%D0%B0%D0%B9%201.JPG" name='Наклейка автомобильная бортовая' price="1 907" />
            </div>
        </>
    )
}