<template>
    <DatePicker v-model="range" mode="dateTime" :columns="2" is-range>
        <template v-slot="{inputValue, inputEvents}">
            <div class="group d-flex flex-column flex-sm-row p-3">
                <div class="left">
                    <div class="check-in text-center d-flex flex-column me-md-5 my-3 justify-content-center align-items-center">
                        <label class="button groupItem" button for="start">Check-in</label>
                        <input style="width: 80%;" type="text" id="start" :value="inputValue.start" v-on="inputEvents.start" class="input groupItem">
                    </div>
                </div>
                <div class="right">
                    <div class="check-out text-center d-flex flex-column ms-md-5 my-3 justify-content-center align-items-center">
                        <label class="button groupItem" for="end">Check-out</label>
                        <input style="width: 80%;" type="text" id="end" :value="inputValue.end" readonly class="input groupItem">
                    </div>
                </div>
            </div>
        </template>

    </DatePicker>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { setupCalendar, Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css';

const date = ref(new Date())
date.value.setDate(Number(date.value.getDate()) + 35)
const range = reactive({
    start: new Date(),
    end: date.value,
})

</script>

<style lang="scss" scoped>
.left{
    border-right: 1px solid #b0afaf;
}

@media (max-width: 575px) {
    .left{
        border-right: 1px solid transparent;
        
    }
}
</style>