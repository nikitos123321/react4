import style from './HomePage.module.css'
import { Banner } from '../../components/BannerComponent/BannerComponent';
import { Category } from '../../components/CategoryComponent/CategoryComponent';
import { Catalog } from '../../components/CatalogComponent/Catalog';


export function HomePage() {
    return (
        <>
            <Banner />
            <div className="mt110">
                <div className='container'>
                    <div className={style.catalog}>
                        <p className={style.catalog_title}>Каталог товаров</p>
                        <div className={style.categories}>
                            <p className={style.p}>Категории:</p>
                            <Category />
                        </div>
                        <Catalog />
                    </div>
                </div>
            </div>
        </>
    )
}