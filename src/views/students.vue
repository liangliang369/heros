<template>
    <div class="students-container">
        <el-row>
        <el-button-group>
            <el-button type="primary" @click="addItem" icon="el-icon-arrow-left">添加</el-button>
        </el-button-group>
        </el-row>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            prop="id"
            label="序号"
            width="150">
            </el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            >
            </el-table-column>
            <el-table-column
            prop="grade"
            label="级别"
            >
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
                <el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
                <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <!-- 弹出框 -->
    <el-dialog
        :title="titles[openTitle]"
        :visible.sync="dialogVisible"
        width="30%"
        >
        <el-form ref="form" :model="formData" label-width="80px">
            <el-form-item label="姓名：">
                <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item label="等级">
                <el-input v-model="formData.grade"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
    </div>
</template>

<script>
    export default {
        name:'students',
        data(){
            return {
                tableData:[],
                titles:{
                    create:'新增',
                    edit:'编辑'
                },
                formData:{
                    name:'',
                    grade:''
                },
                id:'',
                openTitle:'',
                dialogVisible:false,
            }
        },
        created() {
            this.getHeros()
        },
        methods: {
            getHeros(){
                this.axios('heros').then(res=>{
                    const {status,data} = res;
                    if(status==200){
                        this.tableData = data;
                    }
                })
            },
            handleEdit(row){
                this.openTitle = 'edit';
                this.dialogVisible = true;
                this.id = row.id;
                this.axios.get('heros/'+row.id).then(res=>{
                    if(res.status==200){
                        this.formData = res.data;
                    }
                })
            },
            // 编辑保存
            onSubmit(){
                if(this.openTitle=='edit'){
                     console.log('编辑')
                    this.axios.put('heros/'+this.id,this.formData).then(res=>{
                        console.log('编辑保存',res)
                        if(res.status==200){
                            this.$notify({
                                title: '成功',
                                message: '编辑成功',
                                type: 'success'
                            });
                            this.dialogVisible = false;
                            this.getHeros()
                        }else {
                            this.$notify({
                                title: '失败',
                                message: '编辑失败',
                                type: 'error'
                            });
                        }
                    })
                }else if(this.openTitle=='create'){
                    console.log('新增')
                    this.axios.post('heros',this.formData).then(res=>{
                        console.log('新增res',res)
                        const {status,data} = res;
                        if(status==201){
                             this.$notify({
                                title: '成功',
                                message: '添加成功',
                                type: 'success'
                            });
                            this.dialogVisible = false;
                            this.getHeros()
                        }else {
                            this.$notify({
                                title: '失败',
                                message: '添加失败',
                                type: 'error'
                            });
                        }
                    })
                }
            },
            // 根据id删除
            handleDelete(row){
                this.axios.delete('heros/'+row.id).then(res=>{
                    console.log('res',res);
                    if(res.status==200){
                         this.$notify({
                            title: '成功',
                            message: '删除成功',
                            type: 'success'
                        });
                        this.getHeros()
                    }else {
                        this.$notify({
                            title: '失败',
                            message: '删除失败',
                            type: 'error'
                        });
                    }
                })
            },
            // 新增
            addItem(){
                this.openTitle = 'create';
                this.dialogVisible = true;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>