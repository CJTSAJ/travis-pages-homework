<template>
  <div class="setting">
    <h3>我的设置</h3>
    <div class="container">
	<div class="row clearfix">
		<div class="col-md-12 column">
			<table class="table">
				<tbody>
					<tr>
						<td>
							浏览筛选
						</td>
						<td>
							<label><input name="contentSelect" type="checkbox"/>Item1</label>
              <label><input name="contentSelect" type="checkbox"/>Item2</label>
						</td>
					</tr>
					<tr>
						<td>
							是否xxxx
						</td>
						<td>
							<label><input name="xxxSelect" type="radio"/>yes</label>
              <label><input name="xxxSelect" type="radio"/>no</label>
						</td>
					</tr>
          <tr><td></td><td></td></tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
  </div>
</template>


<script>
  export default {
    name: 'setting'
  }
</script>
