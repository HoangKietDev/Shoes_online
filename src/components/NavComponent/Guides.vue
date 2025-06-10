<script setup></script>
<template>
    <div class="relative">
        <div class="absolute bg-white rounded-xl w-[200px] h-[205px] shadow-xl">
            <div class="flex justify-center items-center ">
                <ul class="flex w-full">
                    <li> 
                        <div>
                            <p>Nike Air</p>
                        </div>
                        <div>
                            <p>Nike Air Max</p>
                        </div>
                        <div>
                            <p>Nike FlyEase</p>
                        </div>
                        <div>
                            <p>Nike Pegasus</p>
                        </div>
                        <div>
                            <p>Nike React</p>
                        </div>
                        <div>
                            <p>Nike Vaporfly</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
span {
    font-size: 18px;
    font-weight: 600; 
}

li div:hover{
    background-color: #E5E5E5;
    width: 200px;
}
p {
    font-size: 16px;
    font-weight: 500;
    color: #000;
    opacity: 60%;
    margin-bottom: 5px;
    padding-left: 20px;
    cursor: pointer;
    padding-top: 2px;
    padding-bottom: 2px;
}
p:hover {
    opacity: 100%;
}

</style>