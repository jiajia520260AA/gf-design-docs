---
anchors:
  - text: 色彩说明
    href: '#色彩说明'
  - text: 主题色色阶
    href: '#主题色色阶'
  - text: 语义色规范
    href: '#语义色规范'
  - text: 浅色基础色板
    href: '#浅色基础色板'
  - text: 使用建议
    href: '#使用建议'
---

<script setup>
const accentSteps = [
  ['1', '应用背景', '#FBFDFF'],
  ['2', '轻量背景', '#F4FAFF'],
  ['3', 'UI 背景', '#E6F4FE'],
  ['4', 'Hover 背景', '#D5EFFF'],
  ['5', 'Active 背景', '#C2E5FF'],
  ['6', '轻边框', '#ACD8FC'],
  ['7', '边框 / focus ring', '#4E85E3'],
  ['8', 'Hover 边框', '#3D79E0'],
  ['9', '实心背景', '#2A6CDD'],
  ['10', 'Hover 实心', '#235CBB'],
  ['11', '低对比文本', '#1D4C9B'],
  ['12', '高对比文本', '#1F2D5C']
];

const semanticGroups = [
  {
    title: '中性色',
    rows: [
      ['N2', '#F7F8FA', '背景色-浅'],
      ['N3', '#F0F2F5', '背景色-深'],
      ['N4', '#E6EAF0', '边框、线色-浅，分割线'],
      ['N5', '#D7DCE0', '边框、线色-深，输入框、次要按钮边框'],
      ['N6', '#C8C9CC', '文字色，指 disabled、提示文字等'],
      ['N9', '#939599', '文字色，指辅助、说明文字'],
      ['N10', '#67696E', '文字色，指辅助、说明文字'],
      ['N11', '#313133', '文字色，指主文字2、正文'],
      ['N12', '#13161B', '文字色，指主文字1、大标题']
    ]
  },
  {
    title: '反馈功能色',
    rows: [
      ['Info', '#2A6CDD', '默认信息文本颜色'],
      ['Info Bg', '#EAF0FC', '默认消息中的背景颜色'],
      ['Success', '#2CAA41', '成功信息文本颜色'],
      ['Success Bg', '#EAF7EC', '成功消息中的背景颜色'],
      ['Error', '#D12B2B', '错误消息中的文本颜色'],
      ['Error Bg', '#FAE6E6', '错误消息中的背景颜色'],
      ['Warning', '#E97D30', '警告消息中的文本颜色'],
      ['Warning Bg', '#FCEFE6', '警告消息中的背景颜色']
    ]
  },
  {
    title: '操作状态色',
    rows: [
      ['Primary Hover', 'rgba(42,108,221,.9)', '主按钮等 Hover 颜色'],
      ['Primary Active', 'rgba(29,76,155,.9)', '主按钮等 Active 颜色'],
      ['Link Hover', 'rgba(240,242,245,.7)', '文字链接 Hover 颜色'],
      ['Secondary Active', 'rgba(230,234,240,.8)', '次按钮、文字链接等 Active 颜色'],
      ['Danger Hover', 'rgba(209,43,43,.9)', '警示按钮 Hover 颜色'],
      ['Danger Active', 'rgba(140,0,0,.9)', '警示按钮等 Active 颜色'],
      ['Warning Hover', 'rgba(252,239,230,.6)', '提示文字链接/按钮 Hover 颜色'],
      ['Star', '#FBDA35', '设计辅助，如评分打星']
    ]
  }
];

const basePalettes = [
  ['Slate', ['#FFFFFF', '#F7F8FA', '#F0F2F5', '#E6EAF0', '#D7DCE0', '#C8C9CC', '#B6B7BB', '#A4A6AA', '#939599', '#67696E', '#313133', '#13161B']],
  ['Blue', ['#FBFDFF', '#F4FAFF', '#E6F4FE', '#D5EFFF', '#C2E5FF', '#ACD8FC', '#4E85E3', '#3D79E0', '#2A6CDD', '#235CBB', '#1D4C9B', '#1F2D5C']],
  ['Green', ['#FBFEFC', '#F4FBF6', '#E6F6EB', '#D6F1DF', '#C4E8D1', '#ADDDC0', '#50B861', '#40B152', '#2CAA41', '#259037', '#1F772E', '#1F3C25']],
  ['Red', ['#FFFCFC', '#FFF7F7', '#FEEBEC', '#FFDBDC', '#FFCDCE', '#FDBDBE', '#D12B2B', '#CD1C1B', '#C80000', '#AA0000', '#8C0000', '#5C0000']],
  ['Orange', ['#FEFCFB', '#FFF7ED', '#FFEFD6', '#FFDFB5', '#FFD19A', '#FFC182', '#E97D30', '#E77020', '#E46205', '#C15305', '#A04504', '#5F2600']],
  ['Yellow', ['#FDFDF9', '#FEFCE9', '#FFFAB8', '#FFF394', '#FFE770', '#F3D768', '#FBDA35', '#FBD626', '#FAD20C', '#D4B20A', '#AF9308', '#504100']],
  ['Cyan', ['#FAFDFE', '#F2FAFB', '#DEF7F9', '#CAF1F6', '#B5E9F0', '#9DDDE7', '#7DCEDC', '#3DB9CF', '#00A2C7', '#0797B9', '#107D98', '#0D3C48']],
  ['Sky', ['#F9FEFF', '#F1FAFD', '#E1F6FD', '#D1F0FA', '#BEE7F5', '#A9DAED', '#8DCAE3', '#60B3D7', '#409EC4', '#2089B1', '#00749E', '#1D3E56']],
  ['Teal', ['#FAFEFD', '#F3FBF9', '#E0F8F3', '#CCF3EA', '#B8EAE0', '#A1DED2', '#83CDC1', '#53B9AB', '#12A594', '#0D9B8A', '#008573', '#0D3D38']],
  ['Purple', ['#FEFCFE', '#FBF7FE', '#F7EDFE', '#F2E2FC', '#EAD5F9', '#E0C4F4', '#9E60DB', '#9450D8', '#8A3FD4', '#7535B3', '#612C94', '#3F1F5F']],
  ['Magenta', ['#FFFCFE', '#FEF7FB', '#FEE9F5', '#FBDCEF', '#F6CEE7', '#EFBFDD', '#DB4E92', '#D83E87', '#D42A7C', '#B32369', '#941D57', '#5F1438']],
  ['Gray', ['#FCFCFC', '#F9F9F9', '#F0F0F0', '#E8E8E8', '#E0E0E0', '#D9D9D9', '#CECECE', '#BBBBBB', '#8D8D8D', '#838383', '#646464', '#202020']],
  ['Amber', ['#FEFDFB', '#FEFBE9', '#FFF7C2', '#FFEE9C', '#FBE577', '#F3D673', '#E9C162', '#E2A336', '#FFC53D', '#FFBA18', '#AB6400', '#4F3422']],
  ['Gold', ['#FDFDFC', '#FAF9F2', '#F2F0E7', '#EAE6DB', '#E1DCCF', '#D8D0BF', '#CBC0AA', '#B9A88D', '#978365', '#8C7A5E', '#71624B', '#3B352B']],
  ['Bronze', ['#FDFCFC', '#FDF7F5', '#F6EDEA', '#EFE4DF', '#E7D9D3', '#DFCDC5', '#D3BCB3', '#C2A499', '#A18072', '#957468', '#7D5E54', '#43302B']],
  ['Brown', ['#FEFDFC', '#FCF9F6', '#F6EEE7', '#F0E4D9', '#EBDACA', '#E4CDB7', '#DCBC9F', '#CEA37E', '#AD7F58', '#A07553', '#815E46', '#3E332E']],
  ['ChromeYellow', ['#FEFDFB', '#FEFBE9', '#FFF7C2', '#FFEE9C', '#FBE577', '#F3D673', '#FAC14D', '#FABB3D', '#F9B429', '#D39923', '#AE7E1D', '#523500']],
  ['Crimson', ['#FFFCFD', '#FEF7F9', '#FFE9F0', '#FEDCE7', '#FACEDD', '#F3BED1', '#EAACC3', '#E093B2', '#E93D82', '#DF3478', '#CB1D63', '#621639']],
  ['Custom', ['#FCFCFC', '#F9F9F9', '#F0F0F0', '#E8E8E8', '#E1E1E1', '#D9D9D9', '#CECECE', '#BBBBBB', '#000000', '#2E2E2E', '#646464', '#202020']],
  ['DeepSkyBlue', ['#F9FEFF', '#F1FAFD', '#E1F6FD', '#D1F0FA', '#BEE7F5', '#A9DAED', '#49A0F7', '#3896F6', '#248CF5', '#1E77D0', '#1962AC', '#1B365F']],
  ['Grass', ['#FBFEFB', '#F5FBF5', '#E9F6E9', '#DAF1DB', '#C9E8CA', '#B2DDB5', '#94CE9A', '#65BA74', '#46A758', '#3E9B4F', '#2A7E3B', '#203C25']],
  ['Indigo', ['#FDFDFE', '#F7F9FF', '#EDF2FE', '#E1E9FF', '#D2DEFF', '#C1D0FF', '#ABBDF9', '#8DA4EF', '#3E63DD', '#3358D4', '#3A5BC7', '#1F2D5C']],
  ['Iris', ['#FDFDFF', '#F8F8FF', '#F0F1FE', '#E6E7FF', '#DADCFF', '#CBCDFF', '#B8BAF8', '#9B9EF0', '#5B5BD6', '#5151CD', '#5753C6', '#272962']],
  ['Jade', ['#FBFEFD', '#F4FBF7', '#E6F7ED', '#D6F1E3', '#C3E9D7', '#ACDEC8', '#8BCEB6', '#56BA9F', '#29A383', '#26997B', '#208368', '#1D3B31']],
  ['Lime', ['#FCFDFA', '#F8FAF3', '#EEF6D6', '#E2F0BD', '#D3E7A6', '#C2DA91', '#ABC978', '#8DB654', '#BDEE63', '#B0E64C', '#5C7C2F', '#37401C']],
  ['Mauve', ['#FDFCFD', '#FAF9FB', '#F2EFF3', '#EAE7EC', '#E3DFE6', '#DBD8E0', '#D0CDD7', '#BCBAC7', '#8E8C99', '#84828E', '#65636D', '#211F26']],
  ['MidnightBlue', ['#FDFDFE', '#F7F9FF', '#EDF2FE', '#E1E9FF', '#D2DEFF', '#C1D0FF', '#58639B', '#475391', '#364387', '#2E3973', '#262F5F', '#191F42']],
  ['Mint', ['#F9FEFD', '#F2FBF9', '#DDF9F2', '#C8F4E9', '#B3ECDE', '#9CE0D0', '#7ECFBD', '#4CBBA5', '#86EAD4', '#7DE0CB', '#027864', '#16433C']],
  ['Olive', ['#FCFDFC', '#F8FAF8', '#EFF1EF', '#E7E9E7', '#DFE2DF', '#D7DAD7', '#CCCFCC', '#B9BCB8', '#898E87', '#7F847D', '#60655F', '#1D211C']],
  ['Pink', ['#FFFCFE', '#FEF7FB', '#FEE9F5', '#FBDCEF', '#F6CEE7', '#EFBFDD', '#E7ACD0', '#DD93C2', '#D6409F', '#CF3897', '#C2298A', '#651249']],
  ['Plum', ['#FEFCFF', '#FDF7FD', '#FBEBFB', '#F7DEF8', '#F2D1F3', '#E9C2EC', '#DEADE3', '#CF91D8', '#AB4ABA', '#A144AF', '#953EA3', '#53195D']],
  ['Ruby', ['#FFFCFD', '#FFF7F9', '#FEEFF3', '#FFDCE1', '#FFCED6', '#F8BFC8', '#EFACB8', '#E592A3', '#E54666', '#DC3B5D', '#CA244D', '#64172B']],
  ['Sage', ['#FBFDFC', '#F7F9F8', '#EEF1F0', '#E6E9E8', '#DFE2E0', '#D7DAD9', '#CBCFCD', '#B8BCBA', '#868E8B', '#7C8481', '#5F6563', '#1A211E']],
  ['Sand', ['#FDFDFC', '#F9F9F8', '#F1F0EF', '#E9E8E6', '#E2E1DE', '#DAD9D6', '#CFCECA', '#BCBBB5', '#8D8D86', '#82827C', '#63635E', '#21201C']],
  ['Tomato', ['#FFFCFC', '#FFF8F7', '#FEEBE7', '#FFDCD3', '#FFCDC2', '#FDBDAF', '#F5A898', '#EC8E7B', '#E54D2E', '#DD4425', '#D13415', '#5C271F']],
  ['Turquoise', ['#FAFEFD', '#F3FBF9', '#E0F8F3', '#CCF3EA', '#B8EAE0', '#A1DED2', '#3FAFB9', '#2EA7B2', '#189FAB', '#158791', '#116F78', '#0D3D3F']],
  ['Violet', ['#FDFCFE', '#FAF8FF', '#F4F0FE', '#EBE4FF', '#E1D9FF', '#D4CAFE', '#C2B5F5', '#AA99EC', '#9381DB', '#7C68CA', '#6550B9', '#2F265F']]
];

function readableText(color) {
  if (!color.startsWith('#')) return '#13161B';
  const hex = color.replace('#', '');
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 150 ? '#13161B' : '#FFFFFF';
}
</script>

# 色彩

## 色彩说明

色彩体系来源于 Figma 版本《广发证券内部系统视觉规范 2.0（202605 V1.05）》。页面先收录 `浅色基础色版` 与 `色彩规范` 中的核心内容，用于 PC 内部系统的背景、边框、文字、反馈和操作状态。

<div class="gf-color-note">
  <strong>使用原则</strong>
  <span>优先使用语义色，不直接用色阶替代业务含义；基础色板作为扩展和设计参考，新增命名需避免与规范内变量冲突。</span>
</div>

## 主题色色阶

主色色阶采用 12 个梯度。编号越小越适合浅背景，编号越大越适合实心背景、文字或高对比场景。

<div class="gf-accent-grid">
  <div
    v-for="[step, usage, color] in accentSteps"
    :key="step"
    class="gf-accent-step"
    :style="{ background: color, color: readableText(color) }"
  >
    <strong>{{ step }}</strong>
    <span>{{ usage }}</span>
    <code>{{ color }}</code>
  </div>
</div>

## 语义色规范

语义色用于业务状态和组件状态，不建议只通过颜色传达含义，应与文案、图标或状态标签一起使用。

<section v-for="group in semanticGroups" :key="group.title" class="gf-color-section">
  <h3>{{ group.title }}</h3>
  <div class="gf-color-table">
    <div class="gf-color-table-head">
      <span>功能色</span>
      <span>示例</span>
      <span>色值</span>
      <span>释义</span>
    </div>
    <div v-for="[name, color, usage] in group.rows" :key="name" class="gf-color-row">
      <span class="gf-color-name">{{ name }}</span>
      <span class="gf-color-swatch" :style="{ background: color }"></span>
      <span class="gf-color-value">{{ color }}</span>
      <span>{{ usage }}</span>
    </div>
  </div>
</section>

## 浅色基础色板

基础色板用于扩展图表、标签、轻量背景或特殊业务视觉。业务组件默认仍应优先使用上方语义色。

<div class="gf-palette-grid">
  <section v-for="[name, colors] in basePalettes" :key="name" class="gf-palette-card">
    <div class="gf-palette-title">
      <strong>{{ name }}</strong>
      <span>Colors/{{ name }}</span>
    </div>
    <div class="gf-palette-strip">
      <span
        v-for="(color, index) in colors"
        :key="color + index"
        :title="`${name}/${index + 1} ${color}`"
        :style="{ background: color }"
      ></span>
    </div>
    <div class="gf-palette-list">
      <span v-for="(color, index) in colors" :key="color + index">
        <b>{{ index + 1 }}</b>{{ color }}
      </span>
    </div>
  </section>
</div>

## 使用建议

1. 页面背景使用 `#F7F8FA`，内容面板使用白色，表格表头和分割区域可使用 `#F0F2F5`。
2. 主操作、链接和信息状态优先使用 `#2A6CDD`，Hover/Active 使用对应状态色。
3. 成功、警告、错误状态分别使用绿色、橙色、红色语义色，并提供明确状态文案。
4. 文字颜色按层级使用 `#13161B`、`#313133`、`#67696E`、`#939599`、`#C8C9CC`。
5. 基础色板用于扩展场景时，应先确认是否已有语义色可以表达业务含义。
