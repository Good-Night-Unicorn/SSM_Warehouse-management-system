const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"仓库信息管理",
                        "menuJump":"列表",
                        "tableName":"cangku"
                    }
                ],
                "menu":"仓库信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"仓库类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryCangku"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"物资类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryWuzi"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"物资信息管理",
                        "menuJump":"列表",
                        "tableName":"wuzi"
                    }
                ],
                "menu":"物资信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"出入库管理",
                        "menuJump":"列表",
                        "tableName":"wuziChuruInout"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"出入库列表管理",
                        "menuJump":"列表",
                        "tableName":"wuziChuruInoutList"
                    }
                ],
                "menu":"出入库管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"员工管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"员工管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增",
	                        "修改"
	                    ],
	                    "menu":"仓库信息管理",
	                    "menuJump":"列表",
	                    "tableName":"cangku"
	                }
	            ],
	            "menu":"仓库信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增",
	                        "修改"
	                    ],
	                    "menu":"物资信息管理",
	                    "menuJump":"列表",
	                    "tableName":"wuzi"
	                }
	            ],
	            "menu":"物资信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增",
	                        "修改"
	                    ],
	                    "menu":"出入库管理",
	                    "menuJump":"列表",
	                    "tableName":"wuziChuruInout"
	                }
                    ,
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"出入库列表管理",
                        "menuJump":"列表",
                        "tableName":"wuziChuruInoutList"
                    }
	            ],
	            "menu":"出入库管理"
	        }
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"员工",
	    "tableName":"yonghu"
	}
]
    }
}
export default menu;