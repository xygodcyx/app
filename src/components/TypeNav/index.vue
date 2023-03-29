<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container" @mouseleave="showLeave">
      <h2 class="all" @mouseenter="showEnter">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <transition name="sort">
        <div class="sort" v-show="show">
          <div
            class="all-sort-list2"
            v-for="(c1, index1) in categorylist"
            :key="c1.categoryId">
            <div class="item" @click="goSearch">
              <h3
                @mouseenter="changeOneIndex(index1)"
                :class="{ cur: currentOneIndex === index1 }">
                <a
                  :data-categoryName="c1.categoryName"
                  :data-category1Id="c1.categoryId">
                  {{ c1.categoryName }}
                </a>
              </h3>
              <div
                class="item-list clearfix"
                :style="{
                  display: currentOneIndex == index1 ? 'block' : 'none',
                }">
                <div
                  class="subitem"
                  v-for="(c2, index2) in c1.categoryChild"
                  @mouseenter="currentTwoIndex = index2"
                  @mouseleave="currentTwoIndex = 0"
                  :key="c2.categoryId">
                  <dl class="fore">
                    <dt>
                      <a
                        :data-categoryName="c2.categoryName"
                        :data-category2Id="c2.categoryId"
                        :class="{ cur_green: currentTwoIndex === index2 }">
                        {{ c2.categoryName }}
                      </a>
                    </dt>
                    <dd>
                      <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                        <a
                          :data-categoryName="c3.categoryName"
                          :data-category3Id="c3.categoryId">
                          {{ c3.categoryName }}
                        </a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  data() {
    return {
      currentOneIndex: -1,
      currentTwoIndex: 0,
      show: true,
    };
  },
  mounted() {
    if (this.$route.path != "/home") {
      this.show = false;
    }
    this.$store.dispatch("getSearchList", {});
  },
  computed: {
    ...mapState({ categorylist: (state) => state.home.categorylist }),
  },
  methods: {
    changeOneIndex: throttle(function (index) {
      this.currentOneIndex = index;
    }, 50),
    goSearch(e) {
      let element = e.target;
      let { categoryname, category1id, category2id, category3id } =
        element.dataset;
      // 如果存在categoryname属性那么就说明是a标签，可以进行跳转
      if (categoryname) {
        let location = { name: "search" };
        let query = { categoryname: categoryname };
        if (category1id) {
          query.category1id = category1id;
        } else if (category2id) {
          query.category2id = category2id;
        } else {
          query.category3id = category3id;
        }
        location.query = query;
        if (this.$route.params) {
          location.params = this.$router.params;
        }
        this.$router.push(location);
      }
    },
    showEnter() {
      this.show = true;
    },
    showLeave() {
      this.currentOneIndex = -1;
      if (this.$route.path == "/search") {
        this.show = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }
          .cur {
            background-color: rgb(108, 189, 189);
          }
          .cur_green {
            background-color: rgb(30, 172, 99);
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;
                  .cur {
                    background-color: rgb(108, 189, 189);
                  }

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
      }
    }
    .sort-enter {
      height: 0;
      opacity: 0;
    }
    .sort-enter-to {
      height: 461px;
      opacity: 1;
    }
    .sort-enter-active {
      transition: all 0.5s linear;
    }
  }
}
</style>
