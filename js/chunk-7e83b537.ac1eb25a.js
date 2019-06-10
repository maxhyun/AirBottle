(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e83b537"],{1799:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination justify-content-center "},[a("li",{staticClass:"page-item px-2 ",class:{disabled:!t.pagination.has_pre}},[a("a",{staticClass:"page-link ",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.getProducts(t.pagination.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pagination.total_pages,function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pagination.current_page===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getProducts(e)}}},[t._v(t._s(e))])])}),a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.getProducts(t.pagination.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},s=[],n={props:["pagination"],methods:{getProducts:function(t){this.$emit("getPageProducts",t)}}},i=n,l=a("2877"),r=Object(l["a"])(i,o,s,!1,null,null,null);e["a"]=r.exports},f329:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"text-right mt-4"},[a("button",{staticClass:"btn btn-primary",attrs:{"data-toggle":"modal"},on:{click:function(e){return t.openmodel(!0)}}},[t._v("建立新的優惠券")])]),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.coupons,function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.title))]),a("td",[t._v(t._s(e.percent))]),a("td",[t._v(t._s(e.due_date))]),a("td",{staticClass:"text-center"},[e.is_enabled?a("span",{staticClass:"text-success"},[t._v("已啟用")]):a("span",{staticClass:"text-secondary"},[t._v("未啟用")])]),a("td",[a("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Basic example"}},[a("button",{staticClass:"btn btn-outline-info btn-sm",on:{click:function(a){return t.openmodel(!1,e)}}},[t._v("編輯")]),a("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(a){return t.delModal(e)}}},[t._v("刪除")])])])])}),0)]),a("div",{staticClass:"modal fade",attrs:{id:"couponModel",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(1),a("div",{staticClass:"modal-body"},[a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"titleFormControl"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.title,expression:"tempCoupon.title"}],staticClass:"form-control",attrs:{type:"text",id:"titleFormControl"},domProps:{value:t.tempCoupon.title},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"title",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"couponFormControl"}},[t._v("優惠碼")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.code,expression:"tempCoupon.code"}],staticClass:"form-control",attrs:{type:"text",id:"couponFormControl"},domProps:{value:t.tempCoupon.code},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"code",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"dateFormControl"}},[t._v("到期日")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.due_date,expression:"tempCoupon.due_date"}],staticClass:"form-control",attrs:{type:"date",id:"dateFormControl"},domProps:{value:t.tempCoupon.due_date},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"due_date",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"discountFormControl"}},[t._v("折扣百分比")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.percent,expression:"tempCoupon.percent"}],staticClass:"form-control",attrs:{type:"number",id:"discountFormControl"},domProps:{value:t.tempCoupon.percent},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"percent",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.is_enabled,expression:"tempCoupon.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"gridCheck"},domProps:{checked:Array.isArray(t.tempCoupon.is_enabled)?t._i(t.tempCoupon.is_enabled,null)>-1:t.tempCoupon.is_enabled},on:{change:function(e){var a=t.tempCoupon.is_enabled,o=e.target,s=!!o.checked;if(Array.isArray(a)){var n=null,i=t._i(a,n);o.checked?i<0&&t.$set(t.tempCoupon,"is_enabled",a.concat([n])):i>-1&&t.$set(t.tempCoupon,"is_enabled",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.tempCoupon,"is_enabled",s)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"gridCheck"}},[t._v("\n                                是否啟用\n                            ")])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("關閉")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.addCoupons}},[t._v("確認")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),a("div",{staticClass:"modal-body"},[t._v("\n                是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempCoupon.title))]),t._v(" (刪除後將無法恢復)。\n            ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.removeCoupon}},[t._v("確認刪除")])])])])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("名稱")]),a("th",{attrs:{width:"200"}},[t._v("折扣百分比")]),a("th",{attrs:{width:"200"}},[t._v("到期日")]),a("th",{attrs:{width:"100"}},[t._v("是否啟用")]),a("th",{attrs:{width:"130"}},[t._v("編輯")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Modal title")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],n=a("1157"),i=a.n(n),l=a("1799"),r={data:function(){return{coupons:[],tempCoupon:{},isNew:!1,isDelete:!1,isLoading:!1,pagination:{}}},components:{Pagination:l["a"]},methods:{openmodel:function(t,e){t?(this.tempCoupon={},this.isNew=!0):(this.tempCoupon=Object.assign({},e),this.isNew=!1,console.log(this.tempCoupon)),i()("#couponModel").modal("show")},delModal:function(t){i()("#delProductModal").modal("show"),this.tempCoupon=Object.assign({},t)},addCoupons:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("handle_shoe","/admin/coupon"),e="post",a=this;a.isNew||(t="".concat("https://vue-course-api.hexschool.io","/api/").concat("handle_shoe","/admin/coupon/").concat(a.tempCoupon.id),e="put"),this.$http[e](t,{data:a.tempCoupon}).then(function(t){console.log(t.data),t.data.success?(i()("#couponModel").modal("hide"),a.getCoupons()):(i()("#couponModel").modal("hide"),a.getCoupons(),console.log("新增失敗"))})},getCoupons:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("handle_shoe","/admin/coupons?page=").concat(t);e.isLoading=!0,this.$http.get(a).then(function(t){e.coupons=t.data.coupons,e.isLoading=!1,e.pagination=t.data.pagination})},removeCoupon:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("handle_shoe","/admin/coupon/").concat(t.tempCoupon.id);t.isLoading=!0,this.$http.delete(e,t.tempCoupon).then(function(e){t.isLoading=!1,i()("#delProductModal").modal("hide"),t.getCoupons()})}},created:function(){this.getCoupons()}},c=r,d=a("2877"),p=Object(d["a"])(c,o,s,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-7e83b537.ac1eb25a.js.map