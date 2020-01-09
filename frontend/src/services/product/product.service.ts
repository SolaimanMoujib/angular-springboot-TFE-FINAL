import {Injectable} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  host: string = 'http://localhost:8088';

  products: any;

  constructor(private http: HttpClient) {
  }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', Validators.required),
    description: new FormControl(''),
    category: new FormControl('', Validators.required),
    subcategory: new FormControl('', Validators.required),
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      name: '',
      price: '',
      description: '',
      category: 0,
      subcategory: 0
    });
  }

  populateFormGroup(product) {
    console.log(product);
    this.form.setValue(product);
  }

  getAllProducts() {
    return this.http.get(this.host+'/getAllProducts');
    // console.log(this.http.get(this.host+'/getAllProducts'));


    // this.products = this.http.get(this.host + '/getAllProducts').subscribe(data => {
    //   this.products = data;
    //   console.log(this.products);
    // }, err => {
    //   console.log(err);
    // });
    // return this.products;

    // this.products = [
    //   {
    //     id: 1,
    //     name: 'Adidas Jacket',
    //     price: 50.00,
    //     category: 'menApparel',
    //     subcategory: 'upper',
    //     sale: false,
    //     img: 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto,fl_lossy/4038f6b851f0436eb699a85c00f5f239_9366/BR8_Pullover_Windbreaker_Black_CZ6107_21_model.jpg',
    //     inventory: 2,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   },
    //   {
    //     id: 2,
    //     name: 'Adidas Sweatpants',
    //     price: 29.99,
    //     category: 'menApparel',
    //     subcategory: 'lower',
    //     sale: false,
    //     img: 'http://www.prodirectselect.com/productimages/V3_1_Main/155052.jpg',
    //     inventory: 20,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   },
    //   {
    //     id: 3,
    //     name: 'Adidas Sneakers',
    //     price: 129.99,
    //     category: 'menApparel',
    //     subcategory: 'shoes',
    //     sale: true,
    //     img: 'https://i.pinimg.com/originals/ec/df/33/ecdf33e67c281d1ccb2a7ceb52ccddca.jpg',
    //     inventory: 20,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   },
    //   {
    //     id: 4,
    //     name: 'Nike T-shirt',
    //     price: 49.00,
    //     category: 'menApparel',
    //     subcategory: 'upper',
    //     sale: true,
    //     img: 'https://static1.jassets.com/p/Nike-As-Np-Fttd-Ls-Black-Training-Compression-T-Shirt-4977-558010003-1-pdp_slider_m.webp',
    //     inventory: 20,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   },
    //   {
    //     id: 5,
    //     name: 'Nike Running Shoes',
    //     price: 29.99,
    //     category: 'menApparel',
    //     subcategory: 'shoes',
    //     sale: false,
    //     img: 'https://di2ponv0v5otw.cloudfront.net/posts/2018/02/16/5a87d2ae8af1c528f78adb06/m_5a87d2c105f43036699b7e61.jpg',
    //     inventory: 5,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   },
    //   {
    //     id: 6,
    //     name: 'Adidas Running Shoes',
    //     price: 58.99,
    //     category: 'menApparel',
    //     subcategory: 'shoes',
    //     sale: true,
    //     img: 'http://moresneakers.com/wp-content/uploads/2016/04/adidas-tubular-doom-tonal-all-black-core-black-core-black-core-black-s74794-on-feet-1.jpg',
    //     inventory: 20,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   },
    //   {
    //     id: 7,
    //     name: 'Chocolate Whey',
    //     price: 998.00,
    //     category: 'supplements',
    //     subcategory: 'whey',
    //     sale: false,
    //     img: 'https://s3.images-iherb.com/opn/opn02867/l/3.jpg',
    //     inventory: 20,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   },
    //   {
    //     id: 8,
    //     name: 'Strawberry Whey',
    //     price: 139.90,
    //     category: 'supplements',
    //     subcategory: 'whey',
    //     sale: false,
    //     img: 'http://www.impactnutrition.com.tn/wp-content/uploads/2017/10/PREMIUM-WHEY-STRAWBERRY-CREAM-2000G.jpg',
    //     inventory: 0,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   },
    //   {
    //     id: 9,
    //     name: 'Protein Chocolate Bars',
    //     price: 899.00,
    //     category: 'supplements',
    //     subcategory: 'protein bar',
    //     sale: true,
    //     img: 'http://static.webshopapp.com/shops/087334/files/173441156/mars-inc-mars-xtra-choc.jpg',
    //     inventory: 20,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   },
    //   {
    //     id: 10,
    //     name: 'Yoga Carpet',
    //     price: 4.99,
    //     category: 'equipment',
    //     subcategory: '',
    //     sale: false,
    //     img: 'https://cdn.shopify.com/s/files/1/1246/2947/products/product-image-181370884_large.jpg?v=1485496945',
    //     inventory: 20,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   },
    //   {
    //     id: 11,
    //     name: 'Creatine: Nature Taste',
    //     price: 80.99,
    //     category: 'supplements',
    //     subcategory: 'creatine',
    //     sale: false,
    //     img: 'https://www.fitadium.com/2809-product_page_default/creatine-powder-317gr.jpg',
    //     inventory: 20,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   },
    //   {
    //     id: 12,
    //     name: 'Jumping Rope',
    //     price: 1179.89,
    //     category: 'equipment',
    //     subcategory: '',
    //     sale: true,
    //     img: 'http://koboxinggloves.com/wp-content/uploads/2015/11/Valeo-Speed-Jump-Rope.jpg',
    //     inventory: 20,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   },
    //   {
    //     id: 13,
    //     name: 'Weighted Ball',
    //     price: 69.00,
    //     category: 'equipment',
    //     subcategory: '',
    //     sale: false,
    //     img: 'https://images-na.ssl-images-amazon.com/images/I/81Gfjru18WL._SX466_.jpg',
    //     inventory: 20,
    //     description: 'ifjwoijfoiwejfoijweoifjweoifjoiwejfoijweiofjweoijfoiewjoifejofjowejfoqjewofi'
    //   },
    //   {
    //     id: 14,
    //     name: 'Resistance Rubber Bands',
    //     price: 29.99,
    //     category: 'equipment',
    //     subcategory: '',
    //     sale: true,
    //     img: 'https://images-na.ssl-images-amazon.com/images/I/61DtjNzBpfL._SY355_.jpg',
    //     inventory: 20,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   },
    //   {
    //     id: 15,
    //     name: 'Ab Roller',
    //     price: 1820.90,
    //     category: 'equipment',
    //     subcategory: '',
    //     sale: false,
    //     img: 'https://cdn.shopify.com/s/files/1/1090/8670/products/Ab_Roller_2.jpg?v=1497965926',
    //     inventory: 20,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   },
    //   {
    //     id: 16,
    //     name: 'Foam Roller',
    //     price: 159.00,
    //     category: 'equipment',
    //     subcategory: '',
    //     sale: true,
    //     img: 'https://images-na.ssl-images-amazon.com/images/I/71qJS6GshGL._SL1500_.jpg',
    //     inventory: 20,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   },
    //   {
    //     id: 17,
    //     name: 'Adidas Jacket',
    //     price: 100.00,
    //     category: 'womenApparel',
    //     subcategory: 'upper',
    //     sale: false,
    //     img: 'https://scene7.zumiez.com/is/image/zumiez/pdp_hero/adidas-Sandra-Black-%26-White-Track-Jacket-_272386-front-US.jpg',
    //     inventory: 2,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   },
    //   {
    //     id: 18,
    //     name: 'Nike Running Shoes',
    //     price: 179.99,
    //     category: 'womenApparel',
    //     subcategory: 'shoes',
    //     sale: true,
    //     img: 'http://www.hurleysbeveling.com/images/370/724979007.jpg',
    //     inventory: 20,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   },
    //   {
    //     id: 19,
    //     name: 'Adidas Running Shoes',
    //     price: 549.00,
    //     category: 'womenApparel',
    //     subcategory: 'shoes',
    //     sale: true,
    //     img: 'https://s-media-cache-ak0.pinimg.com/originals/16/12/e3/1612e38d815d346f5328ee1861ab723f.jpg',
    //     inventory: 20,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   },
    //   {
    //     id: 20,
    //     name: 'Adidas Sweatpants',
    //     price: 29.99,
    //     category: 'womenApparel',
    //     subcategory: 'lower',
    //     sale: false,
    //     img: 'https://slimages.macysassets.com/is/image/MCY/products/6/optimized/8094846_fpx.tif?op_sharpen=1&wid=400&hei=489&fit=fit,1&$filterlrg$',
    //     inventory: 5,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   },
    //   {
    //     id: 21,
    //     name: 'Nike Sport Bra',
    //     price: 58.99,
    //     category: 'womenApparel',
    //     subcategory: 'upper',
    //     sale: true,
    //     img: 'https://s7d2.scene7.com/is/image/dkscdn/16NIKWPRCLSSCPDDDAPUA_Black_White_is/',
    //     inventory: 20,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   },
    //   {
    //     id: 22,
    //     name: 'Adidas Sport Bra',
    //     price: 998.00,
    //     category: 'womenApparel',
    //     subcategory: 'upper',
    //     sale: false,
    //     img: 'https://sssports-media-res.cloudinary.com/dpr_auto,f_auto,q_70,w_auto/d_coming-soon.jpg/media/catalog/product/4/0/4058027142995_1.jpg',
    //     inventory: 20,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   },
    //   {
    //     id: 23,
    //     name: 'Nike Legging',
    //     price: 139.90,
    //     category: 'womenApparel',
    //     subcategory: 'lower',
    //     sale: false,
    //     img: 'https://i1.adis.ws/i/jpl/jd_013860_b?qlt=80&w=600&h=765&v=1',
    //     inventory: 0,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   },
    //   {
    //     id: 24,
    //     name: 'Adidas Short',
    //     price: 899.00,
    //     category: 'menApparel',
    //     subcategory: 'lower',
    //     sale: true,
    //     img: 'http://demandware.edgesuite.net/sits_pod14-adidas/dw/image/v2/aagl_prd/on/demandware.static/-/Sites-adidas-products/default/dw8996d85c/zoom/AZ2118_21_model.jpg?sw=2000',
    //     inventory: 20,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   },
    //   {
    //     id: 25,
    //     name: 'BCAA My Protein',
    //     price: 129.99,
    //     category: 'supplements',
    //     subcategory: 'bcaa',
    //     sale: false,
    //     img: 'https://s1.thcdn.com/productimg/600/600/10529280-1034357592398899.jpg',
    //     inventory: 20,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   },
    //   {
    //     id: 26,
    //     name: 'Multivitamins pills',
    //     price: 80.99,
    //     category: 'supplements',
    //     subcategory: 'vitamins',
    //     sale: false,
    //     img: 'http://fitness-kingdom.com/wp-content/uploads/2015/06/fitness-kingdom-multivitamin.jpg',
    //     inventory: 20,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   },
    //   {
    //     id: 27,
    //     name: 'Protein Bar: SugarFree',
    //     price: 1179.89,
    //     category: 'supplements',
    //     subcategory: 'protein bar',
    //     sale: true,
    //     img: 'https://cdn.shopify.com/s/files/1/1463/8084/products/1B00DLDH1N2.PT02_600x.png?v=1507934730',
    //     inventory: 20,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   },
    //   {
    //     id: 28,
    //     name: 'BCAA Cola Taste',
    //     price: 69.00,
    //     category: 'supplements',
    //     subcategory: 'bcaa',
    //     sale: false,
    //     img: 'https://images-na.ssl-images-amazon.com/images/I/41Bzin-OjeL.jpg',
    //     inventory: 20,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   },
    //   {
    //     id: 29,
    //     name: 'Underarmour Legging Black',
    //     price: 29.99,
    //     category: 'womenApparel',
    //     subcategory: 'lower',
    //     sale: true,
    //     img: 'https://underarmour.scene7.com/is/image/Underarmour/V5ProdWithBadge?rp=on-model-crop|pdpMainDesktop&scl=1.00&fmt=jpg&qlt=85&resMode=sharp2&cache=on,off&bgc=F0F0F0&rect=0,0,612,650&$p_pos=305,325&$p_size=612,650&extendN=0,0,0,0&$p_src=is{Underarmour/V5-1246098-001_BCROP}',
    //     inventory: 20,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   },
    //   {
    //     id: 30,
    //     name: 'Underarmour Legging White',
    //     price: 1820.90,
    //     category: 'womenApparel',
    //     subcategory: 'lower',
    //     sale: false,
    //     img: 'http://www.beautysportswear.com/wp-content/uploads/back-white-ray-mesh-leggings.jpg',
    //     inventory: 20,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   },
    //   {
    //     id: 31,
    //     name: 'Space theme Legging',
    //     price: 159.00,
    //     category: 'womenApparel',
    //     subcategory: 'lower',
    //     sale: true,
    //     img: 'https://images-na.ssl-images-amazon.com/images/I/61Bi1-5bq0L._UX342_.jpg',
    //     inventory: 20,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   },
    //   {
    //     id: 32,
    //     name: 'Nike Jacket',
    //     price: 1119.99,
    //     category: 'womenApparel',
    //     subcategory: 'upper',
    //     sale: false,
    //     img: 'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/rfcfwi46v7fgjx3frycx/sportswear-n98-jacket-kp1K6M.jpg',
    //     inventory: 20,
    //     description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
    //   }
    // ];
    // return this.products
  }
}
