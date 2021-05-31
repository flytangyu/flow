import{_ as e}from"./TableImg.7eb6c017.js";import{f as o}from"./BasicForm.86cd97da.js";import{u as t}from"./useTable.5323312b.js";import{a as n,d as a}from"./dept.14b808a2.js";import{_ as i}from"./PageWrapper.ba7be9e5.js";import r from"./CompanyTree.ec488b05.js";import{g as s}from"./index.33a0330f.js";import{b as d}from"./useModal.b44b8cab.js";import{_ as l,c,s as p}from"./DeptModal.3199eae9.js";import{k as m,r as u,u as f,K as b,o as j,n as g,Q as h,q as x,Y as C}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              */import"./useForm.87ab8aa1.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.a66d7f9a.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.0bc8da65.js";/* empty css              *//* empty css              */import"./download.5032960b.js";import"./StrengthMeter.ae9219d5.js";import"./usePageContext.a11cc1be.js";/* empty css              *//* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.5d1be1b0.js";import"./useContextMenu.4afbb1e4.js";import"./company.22895a80.js";import"./index.ed084ff8.js";import"./personal.a9f21d89.js";import"./OrgTree.ce8e7bdc.js";const{createMessage:S}=s();var w=m({name:"DeptManagement",components:{BasicTable:e,PageWrapper:i,CompanyTree:r,DeptModal:l,TableAction:o},setup(){const[e,{openModal:o}]=d(),i=u({}),[r,{reload:s}]=t({title:"列表",api:n,columns:c,formConfig:{labelWidth:120,schemas:p,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,useSearchForm:!0,showIndexColumn:!1,bordered:!0,pagination:!1,actionColumn:{width:150,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:r,registerModal:e,handleCreate:function(){var e;o(!0,{record:{companyId:null==(e=f(i))?void 0:e.id},isUpdate:!1})},handleEdit:function(e,t){t.stopPropagation(),o(!0,{record:e,isUpdate:!0})},handleCreateChild:function(e,t){t.stopPropagation(),e={pid:e.id},o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){e.children&&e.children.length>0?S.warning("有子节点，不能删除！"):a([e.id]).then((e=>{s()}))},handleSuccess:function(){s()},handleSelect:function(e){i.value=e,s({searchInfo:{companyId:e?e.id:""}})},doSearch:function(){s()}}}});const T=C("新增");w.render=function(e,o,t,n,a,i){const r=b("CompanyTree"),s=b("a-button"),d=b("TableAction"),l=b("BasicTable"),c=b("DeptModal"),p=b("PageWrapper");return j(),g(p,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:h((()=>[x(r,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),x(l,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:h((()=>[x(s,{type:"primary",onClick:e.handleCreate},{default:h((()=>[T])),_:1},8,["onClick"])])),action:h((({record:o})=>[x(d,{actions:[{title:"添加子部门",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,o)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),x(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default w;